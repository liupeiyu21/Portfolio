import Image from "next/image";

const works = [
  { name: 'スポーツフェスティバルサイト（チーム）', imageSrc: '/sports.png', skill: 'React,JavaScript', time: '2024年6月ー2024年9月', skillDescription: '１、2年合同チームでサイト制作。スポーツフェスティバルが楽しみになるように、情報を分かりやすく紹介することを意識しました。' },
  { name: '新入生のワークショップ（チーム）', imageSrc: '/newstudent.png', skill: 'figma', time: '2025年3月26日ー4月7日', skillDescription: '新入生たちがゲームを通じて、お互いのことや学科の雰囲気を理解できるようにするプロジェクトです。' },
];

type SportsCardProps = {
  imageSrc: string;
  name: string;
  skill: string;
  time: string;
  skillDescription: string;
};

function AfterClassWorkCard({ imageSrc, name, skill, time, skillDescription }: SportsCardProps) {

    const imageSize =
    name === "アンダの森サイト改善提案"
      ? { width: 160, height: 320 } // ← 小さくしたいサイズ
      : { width: 224, height: 224 }; 

  return (
    <div className="w-100 border border-blue-500 p-4 rounded-xl shadow-xl flex flex-col text-center hover:scale-105 transition-transform duration-300">
      <Image
        src={imageSrc}
        alt={name}
        className="  object-cover mx-auto mb-3"
        width={imageSize.width}
        height={imageSize.height}
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mb-2 text-gray-600">使用技術: {skill}</p>
      <p className="mb-2 text-gray-600">制作期間: {time}</p>
      <p className="text-gray-700 text-sm">{skillDescription}</p>
    </div>
  );
}

export default function SportsList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {works.map((work) => (
        <AfterClassWorkCard
          key={work.name}
          imageSrc={work.imageSrc}
          name={work.name}
          skill={work.skill}
          time={work.time}
          skillDescription={work.skillDescription}
        />
      ))}
    </div>
  );
}
