// app/components/AnimatedText.tsx（App Routerの場合）
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedText() {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current

    gsap.fromTo(
      el,
      {
        y: 100,         // 下から
        opacity: 0     // 透明から
      },
      {
        y: 0,          // 元の位置に
        opacity: 1,    // 完全に表示
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // 要素が画面の80%に来たとき
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <div className="p-10">
      <div
        ref={textRef}
        className="text-2xl font-bold border border-gray-400 p-6 rounded-lg"
      >
        スクロールして表示される文字
      </div>
    </div>
  )
}
