'use client';

import { useState } from 'react';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the submission
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wider">CULTURE COLLECTIVE & PSYKED PRESENTS</p>
          <h1 className="text-[8rem] font-impact leading-none">ACTIVE</h1>
          <p className="text-sm">join for limited tickets</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="border border-black flex">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="0730000321"
              className="flex-1 p-3 outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-impact"
            >
              JOIN
            </button>
          </div>
        </form>

        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
          <p className="font-impact text-xl">JOIN 300 STUDENTS ON THE WAITLIST</p>
          <div className="flex justify-center gap-4 text-sm">
            <p>3 VENUES. 1 TICKET.</p>
            <p>WED 18TH JUNE.</p>
          </div>
        </div>
      </div>
    </main>
  );
} 