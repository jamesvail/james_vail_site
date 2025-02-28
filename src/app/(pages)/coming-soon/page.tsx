"use client";
import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-03-07T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Launch Time!");
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-background text-text">
      <h1 className="text-5xl font-bold mb-4 text-accent">🚀 Coming Soon</h1>
      <p className="text-lg mb-6">
        We&apos;re launching in: <span className="font-semibold">{timeLeft}</span>
      </p>
    </div>
  );
}
