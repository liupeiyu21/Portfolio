"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Myself2() {
    const headingRef = useRef(null);
    const wrapperRef = useRef(null);


    useEffect(() => {
       
       

        gsap.fromTo(
            headingRef.current,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 0.5,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    toggleActions: 'restart none none none'
                }
            }
        )


        
    },[])



    useEffect(() => {
        const elements = gsap.utils.toArray(".fade-item");

        gsap.fromTo(
            elements,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                    // markers: true 
                }
            }
        )
    },[])

    return(
        <>
            <section 
            className=" pb-[50px] bg-[#054685]  ml-[140px] rounded-tl-[80px] rounded-bl-[80px] "
            
            >
                <h2
                ref={headingRef}
                 className="text-[80px] font-extrabold  text-[#ffffff] opacity-[70%]">自己紹介</h2>
                <div 
                
                className="">
                    <div className="px-[50px] pb-[20px]">
                   
                        <div  className="mb-[10px] text-[#ffffff] text-[18px]">
                            <p 
                            ref={wrapperRef}
                            className="fade-item">大学では中国で動物科学を専攻。卒業後、乳製品製造業に就職し、牛乳の品質管理の仕事を担当しました。主な業務内容はデータ分析と管理です。</p>
                        </div>
                        
                        <div className="mb-[10px]  text-[#ffffff] text-[18px]">
                            <p className="fade-item">日本の文化が好きで、日本に来ました。大学では独学でコーディングを学んだことがあり、さらに深く勉強するために、日本電子専門学校のWebデザイン科に進学しました。</p>
                        </div>
                        
                        <div className="mb-[10px]  text-[#ffffff] text-[18px]">
                            <p className="fade-item">1年間で、企画から実装までできるようになりました。そして、コーディングを更に向上させるため、
                            学校の課題以外にも、JavaScriptでゲームなどの日常的な物作りをしています。</p>
                        </div>
                        
                        <div className="mb-[10px] text-[#ffffff] text-[18px]">
                            <p className="fade-item">私は常に学び続け、チームワークや柔軟性、成長意欲を大切にしながら、
                            将来も新たな挑戦に取り組んでいきたいと考えています。</p>
                        </div>
                    </div>
                    
                </div>
                <div className="text-center">
                    <button className="fade-item font-extrabold text-[#054685] bg-[#ffffff] py-[20px] px-[80px] rounded-2xl cursor">私について</button>
                </div>
            </section>

        </>
    )
}