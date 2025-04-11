"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ScrollFadeIn() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // 要素の上端が、画面の80%に来たら開始
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-20">
      <div className="h-[100vh]">スクロールしてね！</div>

      <div
        ref={boxRef}
        className="bg-green-400 text-white p-8 rounded-lg text-2xl shadow-lg"
      >
        スクロールで出てくるボックス！
      </div>
    </div>
  );
}
