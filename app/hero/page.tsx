"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Hero() {
  const [showFirst, setShowFirst] = useState(true)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const entryTimeout = setTimeout(() => {
      setStartAnimation(true)
    }, 100)

    const switchTimeout = setTimeout(() => {
      setShowFirst(false)
    }, 3000)

    return () => {
      clearTimeout(entryTimeout)
      clearTimeout(switchTimeout)
    }
  }, [])

  return (
    <div className="relative w-[1137.84px] h-[400px] ml-[50px] mt-[50px]">
      {/* 画像A */}
      <Image
        src="/first1.png"
        width={1137.84}
        height={400}
        alt="自分の笑顔の写真"
        className={`
          absolute top-0 left-0 rounded-tl-xl rounded-bl-xl shadow-lg
          transition-all duration-1000 ease-in-out transform
          ${startAnimation ? (showFirst ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20') : 'opacity-0 translate-x-20'}
        `}
      />

      {/* 画像B */}
      <Image
        src="/first2.png"
        width={1137.84}
        height={400}
        alt="自分の笑顔の写真"
        className={`
          absolute top-0 left-0 rounded-tl-xl rounded-bl-xl shadow-lg
          transition-all duration-1000 ease-in-out transform
          ${showFirst ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'}
        `}
      />
    </div>
  )
}