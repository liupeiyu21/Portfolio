"use client"


import Image from "next/image"
import StarRating from "../StarRating/page";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Skill2() {
    const skillRef = useRef(null)


    useEffect(() => {
      const elements = gsap.utils.toArray(".skill-item");

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
                  trigger: skillRef.current,
                  start: 'top 80%',
                  toggleActions: 'play reverse play reverse',
                  // markers: true 
              }
          }
      )
  },[])


    return(

                    <section className="flex justify-between mx-auto container ">
                      <div>
                         <h2 className=" text-[50px] text-[#054685] font-extrabold mb-[100px] pt-[100px]">技術スキル<span className="text-[24px] text-[#000000] ml-[20px]">について</span></h2>
                         <p className="p-[20px]">1年間で、企画から実装までできるようになりました。
そして、コーディングを更に向上させるため、
学校の課題以外にも、JavaScriptでゲームなどの日常的な物作りをしています。</p>
                      </div>
                      <div className="flex flex-col pt-[150px] relative">
                        <div 
                        ref={skillRef}
                        className="skill-item mr-4 border bg-[#ffffff] border-[#0000001a] rounded-[10px] shadow-inner">
                          <div className="flex items-center   rounded-[10px] mr-[100px] px-[150px] py-[10px] ">
                            <Image 
                            src="/html.png"
                            width={50}
                            height={50}
                            className="mt-[10px] mr-[10px]"
                            alt="HTMLのマック"
                            />
                            <StarRating 
                            
                            rating={4}  
                            />
                            <p className="ml-[30px] whitespace-nowrap">4.0 / 5.0</p>
                          </div>
              
                          <div className="flex items-center   rounded-[10px] mr-[100px] px-[150px] py-[10px] ">
                            <Image 
                            src="/css.png"
                            width={50}
                            height={50}
                            className="mr-[10px]"
                            alt="cssのマック"
                            />
                            <StarRating rating={4}  />
                            <p className="ml-[10px] whitespace-nowrap">4.0 / 5.0</p>
                          </div>
              
                          <div className="flex items-center  rounded-[10px] mr-[100px] px-[150px] py-[10px]">
                            <Image 
                            src="/js.png"
                            width={50}
                            height={50}
                            className="mb-[10px] mr-[10px]"
                            alt="jsのマック"
                            />
                            <StarRating rating={4}  />
                            <p className="ml-[10px] whitespace-nowrap">4.0 / 5.0</p>
                          </div>
                         </div>
                     
                        
                        <div
                    
                        className="skill-item relative -mt-1.5 ml-4 z-10 bg-[#ffffff] border border-[#0000001a] rounded-[10px] shadow-2xl">
                          <div className="flex items-center  rounded-[10px] mr-[100px] px-[150px] py-[10px]  ">
                            <Image 
                            src="/figma.png"
                            width={50}
                            height={50}
                            className="mt-[20px mr-[10px]]"
                            alt="figmaのマック"
                            />
                            <StarRating rating={3}  />
                            <p className="ml-[10px] whitespace-nowrap">3.0 / 5.0</p>
                          </div>
              
                          <div className="flex items-center   rounded-[10px] mr-[100px] px-[150px] py-[10px] ">
                            <Image 
                            src="/Ps.png"
                            width={50}
                            height={50}
                            className="mr-[10px]"
                            alt="photoshopのマック"
                            />
                            <StarRating rating={3}  />
                            <p className="ml-[10px] whitespace-nowrap">3.0 / 5.0</p>
                          </div>
              
                          <div className="flex items-center  rounded-[10px] mr-[100px] px-[150px] py-[10px] ">
                            <Image 
                            src="/ai.png"
                            width={50}
                            height={50}
                            className="mb-[10px] mr-[10px]"
                            alt="illustratorのマック"
                            />
                            <StarRating rating={2}  />
                            <p className="ml-[10px] whitespace-nowrap">2.0 / 5.0</p>
                          </div>
                         </div>
                     </div>
                      
                      {/* <MyComponent/> */}
    
                    </section>
        
    )
}

