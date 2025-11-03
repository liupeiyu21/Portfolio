import StarRating from "../StarRating/StarRating";
import Image from "next/image";

const skills = [
  { name: 'JavaScript', imageSrc: '/javascript.png', level: 4, skillDescription: '学校でのプログラミング教育で学びました。JavaScriptを使用して二つのサイトを制作したことがあります。' },
  { name: 'HTML', imageSrc: '/html.png', level: 4, skillDescription: 'マークアップ言語の基本を理解しており、セマンティックなHTMLを使用して構造を適切に表現できます。' },
  { name: 'CSS', imageSrc: '/css.png', level: 4, skillDescription: 'レスポンシブデザインやFlexbox、Gridレイアウトを活用して、さまざまなデバイスで美しいデザインを実現しています。' },
  { name: 'TypeScript', imageSrc: '/typescript.png', level: 3, skillDescription: '型定義により、保守性の高いコードを実現しています。これからの新規開発ではTypeScriptを使っていくだろうなと考えています。今回のポートフォリオでもTypeScriptを活用しています。' },
  { name: 'React', imageSrc: '/react.png', level: 3, skillDescription: 'リンクをクリックするとURLを変わるのに、ページ全体が切り替わらずに一部がけが変化しています。非常に更新し早いです。難しい感じたことはhooksを使った状態管理です。' },
  { name: 'PHP', imageSrc: '/php.png', level: 3, skillDescription: 'サーバーサイド開発とAPI構築を経験しています。PHPを使用したTODOアプリの開発を行いました。' },
  { name: 'MySQL', imageSrc: '/mysql.png', level: 3, skillDescription: 'データベース設計やSQLクエリの最適化を行いました。' },
];

type SkillCardProps = {
  imageSrc: string;
  name: string;
  level: number;
  skillDescription: string;
};

function SkillCard({ imageSrc, name, level, skillDescription }: SkillCardProps) {
  return (
    <div className="w-60 border border-blue-500 p-4 rounded-xl shadow-xl flex flex-col text-center hover:scale-105 transition-transform duration-300">
      <Image
        src={imageSrc}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
        width={64}
        height={64}
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex items-center justify-center mb-2">
        <p className="mr-2 text-gray-600">熟練度:</p>
        <StarRating rating={level} />
      </div>
      <p className="text-gray-700 text-sm">{skillDescription}</p>
    </div>
  );
}

export default function SkillList() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          imageSrc={skill.imageSrc}
          name={skill.name}
          level={skill.level}
          skillDescription={skill.skillDescription}
        />
      ))}
    </div>
  );
}

























// import StarRating from "../StarRating/page";


// const skills = [
//     { name: 'JavaScript', imageSrc: '/javascript.png', level: 5, skillDescription: 'Experienced in building dynamic web applications using JavaScript.' },
//     { name: 'TypeScript', imageSrc: '/typescript.png', level: 4, skillDescription: 'Proficient in TypeScript for building scalable applications.' },
//     { name: 'React', imageSrc: '/react.png', level: 3, skillDescription: 'Skilled in building user interfaces with React.' },
//     { name: 'PHP', imageSrc: '/php.png', level: 4, skillDescription: 'Experienced in server-side rendering with PHP.' },
//     { name: 'MySQL', imageSrc: '/mysql.png', level: 4, skillDescription: 'Proficient in building backend services with MySQL.' },
// ];

// type SkillCardProps = {
//   imageSrc: string;
//   name: string;
//   level: number;
//   skillDescription: string;
// };

// export default function SkillCard({ imageSrc, name, level,  skillDescription }: SkillCardProps) {
//   return (
//     <div className="w-60 border border-blue-500 p-4 rounded-xl shadow-xl flex flex-col text-center hover:scale-105 transition-transform duration-300">
//       <img 
//         src={imageSrc} 
//         alt={name} 
//         className="w-15 h-15 rounded-full object-cover mx-auto m-4" 
//         />
//       <h3 className="text-xl font-bold">{name}</h3>
//       <div className="flex items-center ">
//       <p className="flex mx-auto mr-1">熟練度:</p><StarRating rating={level} />
//       </div>
//       <p className="text-gray-700">{skillDescription}</p>
//     </div>
//   );
// }
