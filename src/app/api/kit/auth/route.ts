import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createKitSession,
  isValidKitPassword,
  KIT_SESSION_COOKIE,
  KIT_SESSION_TTL_SECONDS,
} from "@/lib/kit-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let password: unknown;
  try {
    const body = (await request.json()) as { password?: unknown };
    password = body.password;
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  if (!isValidKitPassword(password)) {
    return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  const cookieStore = await cookies();
  cookieStore.set(KIT_SESSION_COOKIE, createKitSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: KIT_SESSION_TTL_SECONDS,
  });

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
