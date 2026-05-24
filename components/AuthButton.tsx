"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabaseAuth } from "@/lib/supabase-auth";

export default function AuthButton() {
  const [loggedIn, setLoggedIn] =
    useState(false);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } =
        await supabaseAuth.auth.getSession();

      setLoggedIn(!!session);
    }

    checkUser();
  }, []);

  async function logout() {
    await supabaseAuth.auth.signOut();

    window.location.href = "/";
  }

  if (loggedIn) {
    return (
      <div className="flex items-center gap-3">

        <Link
          href="/admin"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Dashboard
        </Link>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Login
    </Link>
  );
}