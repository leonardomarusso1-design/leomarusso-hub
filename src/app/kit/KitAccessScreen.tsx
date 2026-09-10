"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, KeyRound, ShieldCheck } from "lucide-react";

export default function KitAccessScreen() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/kit/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) throw new Error("invalid");
      window.location.reload();
    } catch {
      setError("Senha inválida ou acesso ainda não liberado. Confira a área de membros da Kiwify após a confirmação do pagamento.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#050a14] px-5 py-12 text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />
      <section className="relative w-full max-w-md rounded-[1.75rem] border border-white/12 bg-white/[0.045] p-7 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-9">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200"><KeyRound className="h-6 w-6" /></div>
        <p className="mt-7 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70">Área protegida · Kiwify</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">Kit de Execução da Primeira Oferta</h1>
        <p className="mt-4 text-sm leading-6 text-white/55">O conteúdo fica disponível apenas para compradores aprovados. Use a senha entregue na área de membros da Kiwify.</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm font-semibold text-white/78" htmlFor="kit-password">Senha de acesso</label>
          <input id="kit-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Digite a senha recebida" className="w-full rounded-xl border border-white/12 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15" />
          {error && <p role="alert" className="rounded-xl border border-rose-300/20 bg-rose-300/8 px-4 py-3 text-xs leading-5 text-rose-100">{error}</p>}
          <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-200 px-5 py-3.5 text-sm font-bold text-[#221800] transition hover:bg-amber-100 disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Validando acesso…" : "Acessar o Kit"}<ArrowRight className="h-4 w-4" /></button>
        </form>
        <div className="mt-7 flex items-start gap-3 border-t border-white/8 pt-5 text-xs leading-5 text-white/38"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/70" /><span>A sessão é protegida por cookie HttpOnly e expira automaticamente. Se você comprou e não recebeu a senha, fale com o suporte.</span></div>
      </section>
    </main>
  );
}
