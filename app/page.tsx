'use client';

import { useState } from 'react';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <div className="w-full max-w-2xl text-center space-y-16">
        <div className="space-y-6">
          <p className="text-sm tracking-wide">CULTURE COLLECTIVE & PSYKED PRESENTS</p>
          <h1 className="text-[120px] font-serif leading-none tracking-normal">ACTIVE</h1>
          <p className="text-sm tracking-wide">join for limited tickets</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
          <div className="border border-black flex w-full">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="0730000321"
              className="flex-1 p-4 outline-none text-lg"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 font-normal text-lg"
            >
              JOIN
            </button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="flex justify-center gap-3">
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <div className="w-5 h-5 bg-black rounded-full"></div>
            <div className="w-5 h-5 bg-black rounded-full"></div>
          </div>
          <p className="text-lg tracking-wide">JOIN 300 STUDENTS ON THE WAITLIST</p>
          <div className="flex justify-center gap-4 text-sm tracking-wide">
            <p>3 VENUES. 1 TICKET.</p>
            <p>WED 18TH JUNE.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 