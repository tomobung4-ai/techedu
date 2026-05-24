"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email) return;

    console.log("Email Subscriber:", email);

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="bg-blue-600 text-white rounded-3xl p-10 my-16">

      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Dapatkan Artikel Terbaru
        </h2>

        <p className="mb-8 text-lg">
          Berlangganan newsletter untuk mendapatkan
          update teknologi, komputer, programming,
          AI, dan pendidikan.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >

          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              flex-1
              px-4
              py-3
              rounded-xl
              text-black
            "
            required
          />

          <button
            type="submit"
            className="
              bg-white
              text-blue-600
              px-6
              py-3
              rounded-xl
              font-semibold
            "
          >
            Berlangganan
          </button>

        </form>

        {success && (
          <p className="mt-4">
            ✅ Terima kasih telah berlangganan!
          </p>
        )}

      </div>

    </section>
  );
}