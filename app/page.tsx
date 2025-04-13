import Image from "next/image";
import StarRating from "./StarRating/page";
import Hero from "./hero/page";
import Myself from "./myself/page";
// import MyComponent from "./simp/page"
import Skill from "./skill/page"
import Work from "./work/page";
import AnimatedText from "./simp/page"
import Myself2 from "./simp2/page"

export default function Home() {
  return (
    <div>
      <nav className="border-b border-gray-200 p-4 flex justify-between mx-auto container items-center " >
        <div className="text-4xl">Portfolio</div>
         <div className="space-x-12 font-medium">
          <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">自己紹介</a>
          <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">技術スキル</a>
          <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">制作物</a>
         </div>
      </nav>
      {/* ファスビュー */}
      <div className="flex ">
        <div className="items-center">
          <p className="text-2xl sm:text-3xl text-[#515050]  mx-auto container pt-30 pl-35 whitespace-nowrap">リュウ ハイギョク</p>
          <h1 className="text-2xl sm:text-5xl font-bold  mx-auto container pl-40 ">劉佩玉<span></span></h1>
          <h3 className="mx-auto container pl-40 pt-8 font-bold text-[#6b6969]">日本電子専門学校<br/><span className="text-[14px]">Webデザイン科</span></h3>
          <h3 className="mx-auto container pl-40 pt-8 font-bold text-[#838080]">出身：中国　河南省</h3>
          <p className="mx-auto container pl-40 pt-2 text-[#054685] text-[30px] font-extrabold">継続は力になり</p>
        </div>
        <Hero />
      </div>
      <main className="mt-[150px] pt-[100px]   bg-blue-50">

        <section>
          <Myself />
        </section>
          <Skill />

          <Work />

          <Myself2 />

      <div  className="min-h-screen">
        <div className="h-[100vh] flex items-center justify-center">上のスペース</div>
        <AnimatedText />
        <div className="h-[100vh]" /> {/* 下のスペース */}
      </div>
        {/* <section className="bg-[#c9ddf7] rounded-t-[80px] pb-[100px]">
          <h2 className="text-center text-[30px] mb-[100px] pt-[50px]">技術スキル</h2>
          <div className="flex justify-around mx-auto container mb-[150px]">
            <div className="flex items-center ">
              <Image 
              src="/html.png"
              width={50}
              height={50}
              alt="HTMLのマック"
              />
              <StarRating rating={4}  />
              <p className="ml-[10px]">4.0 / 5.0</p>
            </div>

            <div className="flex items-center ">
              <Image 
              src="/css.png"
              width={50}
              height={50}
              alt="cssのマック"
              />
              <StarRating rating={4}  />
              <p className="ml-[10px]">4.0 / 5.0</p>
            </div>

            <div className="flex items-center ">
              <Image 
              src="/js.png"
              width={50}
              height={50}
              alt="jsのマック"
              />
              <StarRating rating={4}  />
              <p className="ml-[10px]">4.0 / 5.0</p>
             </div>
          </div>
            
          <div className="flex justify-around mx-auto container">
            <div className="flex items-center ">
              <Image 
              src="/figma.png"
              width={50}
              height={50}
              alt="figmaのマック"
              />
              <StarRating rating={3}  />
              <p className="ml-[10px]">3.0 / 5.0</p>
             </div>

             <div className="flex items-center ">
              <Image 
              src="/Ps.png"
              width={50}
              height={50}
              alt="photoshopのマック"
              />
              <StarRating rating={3}  />
              <p className="ml-[10px]">3.0 / 5.0</p>
             </div>

             <div className="flex items-center ">
              <Image 
              src="/ai.png"
              width={50}
              height={50}
              alt="illustratorのマック"
              />
              <StarRating rating={2}  />
              <p className="ml-[10px]">2.0 / 5.0</p>
             </div>
          </div>
        

          <section  className="bg-[#5899ee] mt-[200px] rounded-t-[80px] ">
            <h2 className="text-center text-[30px] mb-[100px] pt-[50px]">制作物</h2>
          </section>
        </section> */}
      </main>
     
    </div>
  );
}
