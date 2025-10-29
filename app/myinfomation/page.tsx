

export default function MyInformation() {
    return (
      <>
            <div className="  bg-blue-50 pb-20">
              <nav className="border-b border-gray-200 p-4 flex justify-between mx-auto w-full items-center bg-blue-100" >
                <div className="text-4xl ml-4">Portfolio</div>
                 <div className="space-x-12 font-medium mr-4">
                  <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">自己紹介</a>
                  <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">技術スキル</a>
                  <a href="#" className="hover:text-blue-800 hover:font-extrabold transition-all duration-300">制作物</a>
                 </div>
              </nav>
              {/* ファスビュー */}
              <div className=" ">
        
                <div className="items-center text-center">
                  <img 
                    src="./myphoto.png" 
                    alt="my photo" 
                    className="w-32 h-32 rounded-full mx-auto object-cover  mt-24"
                   
                  />
                  <p className="text-2xl sm:text-xl text-[#515050]  mx-auto container pt-1  whitespace-nowrap ">リュウ ハイギョク</p>
                  <h1 className="text-2xl sm:text-2xl font-bold  mx-auto container ">劉佩玉<span className="text-[14px] pt-4">中国</span></h1>
                  <h3 className="mx-auto container font-bold text-[#6b6969]">日本電子専門学校 <span className="text-[14px]">Webデザイン科</span></h3>
                  <p className="mx-auto container pt-2 text-[#054685] text-[30px] font-extrabold">継続は力なり</p>
                </div>
                {/* <Hero /> */}
              </div>
            </div>
      </>
    )

}