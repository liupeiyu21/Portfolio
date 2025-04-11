"use client"


import Image from "next/image"
import StarRating from "../StarRating/page";

export default function Skill() {
    return(

                    <section className="flex justify-between mx-auto container ">
                      <h2 className="ml-[140px]  text-[50px] text-[#054685] font-extrabold mb-[100px] pt-[100px]">技術スキル</h2>
                      <div className="flex flex-col pt-[150px]">
                        <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg">
                          <Image 
                          src="/html.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="HTMLのマック"
                          />
                          <StarRating 
                          
                          rating={4}  
                          />
                          <p className="ml-[30px]">4.0 / 5.0</p>
                        </div>
            
                        <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg">
                          <Image 
                          src="/css.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="cssのマック"
                          />
                          <StarRating rating={4}  />
                          <p className="ml-[10px]">4.0 / 5.0</p>
                        </div>
            
                        <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg ">
                          <Image 
                          src="/js.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="jsのマック"
                          />
                          <StarRating rating={4}  />
                          <p className="ml-[10px]">4.0 / 5.0</p>
                         </div>
                     
                        
                    
                        <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg ">
                          <Image 
                          src="/figma.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="figmaのマック"
                          />
                          <StarRating rating={3}  />
                          <p className="ml-[10px]">3.0 / 5.0</p>
                         </div>
            
                         <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg">
                          <Image 
                          src="/Ps.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="photoshopのマック"
                          />
                          <StarRating rating={3}  />
                          <p className="ml-[10px]">3.0 / 5.0</p>
                         </div>
            
                         <div className="flex items-center  border border-[#0000001a] rounded-[10px] mr-[100px] px-[150px] py-[5px] shadow-lg ">
                          <Image 
                          src="/ai.png"
                          width={50}
                          height={50}
                          className="m-[20px]"
                          alt="illustratorのマック"
                          />
                          <StarRating rating={2}  />
                          <p className="ml-[10px]">2.0 / 5.0</p>
                         </div>
                     </div>
                      
                      {/* <MyComponent/> */}
    
                    </section>
        
    )
}

