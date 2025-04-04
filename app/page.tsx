import Image from "next/image";

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
      <div>
        <h1 className="text-2xl sm:text-5xl font-bold  mx-auto container pt-30 pl-40 ">劉佩玉</h1>
        <h3 className="mx-auto container pl-40 pt-8 font-medium">日本電子専門学校　Webデザイン科</h3>
        <p className="mx-auto container pl-40 pt-2 text-[#8a8a8a]">私は常に学び続け、チームワークや柔軟性、成長意欲を大切にしながら、
        将来も新たな挑戦に取り組んでいきたいと考えています。</p>

      </div>
    </div>
  );
}
