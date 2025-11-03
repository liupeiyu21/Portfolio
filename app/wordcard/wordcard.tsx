import Image from "next/image";

const works = [
  { name: 'e⭐️イヤホンECサイト', imageSrc: '/ec.png', skill: 'React,JavaScript,CSS', time: '2024年10月ー2024年12月', skillDescription: '企画から実装まで一人でできるようになりました。' },
  { name: '学力向上アプリ', imageSrc: '/iphone.png', skill: 'React Native,TypeScript,CSS', time: '2025年04月ー2025年08月', skillDescription: 'テーマ:楽しく学ぼう！未来を描くアプリコンテスト。惑星を近くで見たり、動かしたりしながら、楽しく太陽系について学べます。' },
  { name: 'TODOアプリ', imageSrc: '/todo.png', skill: 'PHP,MySQL', time: '2025年10月10日ー2025年10月13日', skillDescription: 'データベースの基礎知識を学ぶために、TODOアプリを制作しました。' },
  { name: 'アンダの森サイト改善提案', imageSrc: '/annda.png', skill: 'figma,photoshop,illustrator', time: '2025年4月ー2025年6月', skillDescription: '株式会社NSグループ様の「アンダの森」サイト改善提案のプロトタイプを制作しました。' }
];

type WorkCardProps = {
  imageSrc: string;
  name: string;
  skill: string;
  time: string;
  skillDescription: string;
};

function WorkCard({ imageSrc, name, skill, time, skillDescription }: WorkCardProps) {

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

export default function SkillList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {works.map((work) => (
        <WorkCard
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
