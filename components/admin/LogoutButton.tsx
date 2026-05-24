"use client";

import { supabaseAuth } from "@/lib/supabase-auth";

export default function LogoutButton() {
  async function logout() {
    await supabaseAuth.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}