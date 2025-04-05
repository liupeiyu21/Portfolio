import Image from "next/image";
import StarRating from "./StarRating/page";

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
      <div>
        <p className="text-2xl sm:text-3xl text-[#515050]  mx-auto container pt-30 pl-35 ">リュウ ハイギョク</p>
        <h1 className="text-2xl sm:text-5xl font-bold  mx-auto container pl-40 ">劉佩玉<span></span></h1>
        <h3 className="mx-auto container pl-40 pt-8 font-bold text-[#535151]">出身：中国　河南省</h3>
        <p className="mx-auto container pl-40 pt-2 text-[#8a8a8a] text-[18px] ">私は常に学び続け、チームワークや柔軟性、成長意欲を大切にしながら、
        将来も新たな挑戦に取り組んでいきたいと考えています。</p>
      </div>
      <main className="mt-[150px]  rounded-t-[80px]  bg-blue-50">

        <section className=" pb-[100px]">
          <h2 className="text-center text-[30px] mb-[100px] pt-[50px]">自己紹介</h2>
          <div className="flex justify-center mx-auto container">
            <div>
              <p className="mx-auto container break-words font-bold text-[20px] mb-[40px]">日本電子専門学校　Webデザイン科</p>
              <div  className="mb-[20px]">
                <p>大学では中国で動物科学を専攻。</p>
                <p>卒業後、乳製品製造業に就職し、牛乳の品質管理の仕事を担当しました。</p>
                <p>主な業務内容はデータ分析と管理です。</p>
              </div>
              <div className="mb-[20px]">
                <p>日本の文化が好きで、日本に来ました。大学では独学でコーディングを学んだことがあり、<br/>さらに深く勉強するために、日本電子専門学校のWebデザイン科に進学しました。</p>
              </div>
              <div className="mb-[20px]">
                <p>1年間で、企画から実装までできるようになりました。</p>
                <p>そして、コーディングを更に向上させるため、<br/>
                学校の課題以外にも、JavaScriptでゲームなどの日常的な物作りをしています。</p>
              </div>
              <div className="mb-[20px]">
                <p>私は常に学び続け、チームワークや柔軟性、成長意欲を大切にしながら、<br/>
                将来も新たな挑戦に取り組んでいきたいと考えています。</p>
              </div>
            </div>
            <Image
            src="/myself.png"
            width={260}
            height={20}
            pt-10
            alt="私がパソコンを使ってる写真"
            className=""
            />
          </div>
        </section>

        <section className="bg-[#c9ddf7] rounded-t-[80px] pb-[100px]">
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
        </section>
      </main>
    </div>
  );
}
