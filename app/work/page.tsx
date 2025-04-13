import Image from "next/image"



export default function Work() {
    return (

          <section  className="bg-[#5899ee] mt-[200px] rounded-t-[80px] ">
            <h2 className="text-center text-[30px] mb-[100px] pt-[50px]">制作物</h2>
            
            <div>
                <div>
                    <h3 className=" mx-auto container">学校の課題</h3>
                    <div className="flex mx-auto container">
                        <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                        <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                    </div>
                </div>
                <div>
                    <h3 className=" mx-auto container">課外活動</h3>
                    <div className="flex mx-auto container">
                        <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                        <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                    </div>
                </div>
                <div>
                    <h3 className=" mx-auto container">自主制作</h3>
                    <div className="flex mx-auto container">
                    <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                     <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                     <Image 
                        src="/pc.png"
                        width={345}
                        height={250}
                        className="mr-[50px]"
                        alt="進級制作のサイト"
                        />
                    </div>
                </div>
            </div>
          </section>
      
    )
}