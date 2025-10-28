import StarRating from "../StarRating/page";


const skills = [
    { name: 'JavaScript', imageSrc: '/javascript.png', level: 5, skillDescription: 'Experienced in building dynamic web applications using JavaScript.' },
    { name: 'TypeScript', imageSrc: '/typescript.png', level: 4, skillDescription: 'Proficient in TypeScript for building scalable applications.' },
    { name: 'React', imageSrc: '/react.png', level: 3, skillDescription: 'Skilled in building user interfaces with React.' },
    { name: 'PHP', imageSrc: '/php.png', level: 4, skillDescription: 'Experienced in server-side rendering with PHP.' },
    { name: 'MySQL', imageSrc: '/mysql.png', level: 4, skillDescription: 'Proficient in building backend services with MySQL.' },
];

type SkillCardProps = {
  imageSrc: string;
  name: string;
  level: number;
  skillDescription: string;
};

export default function SkillCard({ imageSrc, name, level,  skillDescription }: SkillCardProps) {
  return (
    <div className="w-60 border border-blue-500 p-4 rounded-xl shadow-xl flex flex-col text-center hover:scale-105 transition-transform duration-300">
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-15 h-15 rounded-full object-cover mx-auto m-4" 
        />
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex items-center ">
      <p className="flex mx-auto mr-1">熟練度:</p><StarRating rating={level} />
      </div>
      <p className="text-gray-700">{skillDescription}</p>
    </div>
  );
}
