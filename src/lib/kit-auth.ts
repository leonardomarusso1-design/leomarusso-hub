import { createHmac, timingSafeEqual } from "node:crypto";

export const KIT_SESSION_COOKIE = "kit_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

type KitSession = { issuedAt: number; expiresAt: number };

function getSecret() {
  return process.env.KIT_ACCESS_PASSWORD?.trim() || null;
}

function encode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function isValidKitPassword(password: unknown) {
  const secret = getSecret();
  if (!secret || typeof password !== "string" || password.length === 0) return false;

  const provided = Buffer.from(password);
  const expected = Buffer.from(secret);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

export function createKitSession() {
  const now = Math.floor(Date.now() / 1000);
  const session: KitSession = { issuedAt: now, expiresAt: now + SESSION_TTL_SECONDS };
  const payload = encode(JSON.stringify(session));
  const signature = sign(payload, getSecret() || "missing-secret");
  return `${payload}.${signature}`;
}

export function isValidKitSession(value: string | undefined) {
  const secret = getSecret();
  if (!secret || !value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;

  const expectedSignature = sign(payload, secret);
  const provided = Buffer.from(signature);
  const expected = Buffer.from(expectedSignature);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) return false;

  try {
    const session = JSON.parse(decode(payload)) as KitSession;
    const now = Math.floor(Date.now() / 1000);
    return Number.isFinite(session.issuedAt) && Number.isFinite(session.expiresAt) && session.expiresAt > now && session.issuedAt <= now;
  } catch {
    return false;
  }
}

export const KIT_SESSION_TTL_SECONDS = SESSION_TTL_SECONDS;
