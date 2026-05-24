"use client";

import { supabaseAuth } from "@/lib/supabase-auth";

export default function LoginPage() {
  async function loginGoogle() {
    await supabaseAuth.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/admin`,
      },
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="border rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Login Admin
        </h1>

        <button
          onClick={loginGoogle}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Login dengan Google
        </button>
      </div>
    </main>
  );
}