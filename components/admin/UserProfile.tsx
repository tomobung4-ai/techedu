"use client";

import { useEffect, useState } from "react";
import { supabaseAuth } from "@/lib/supabase-auth";

export default function UserProfile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { session },
      } = await supabaseAuth.auth.getSession();

      setUser(session?.user ?? null);
    }

    loadUser();
  }, []);

  if (!user) {
    return null;
  }

  const avatar =
    user.user_metadata?.avatar_url;

  const name =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    "Admin";

  const email = user.email;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-5 border">
      <div className="flex items-center gap-4">

        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full"
          />
        )}

        <div>
          <h2 className="font-bold text-lg">
            {name}
          </h2>

          <p className="text-gray-500">
            {email}
          </p>
        </div>

      </div>
    </div>
  );
}