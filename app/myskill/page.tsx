import React from 'react';
import SkillCard from '../sckillcard/sckillcard';



export default function MySkill() {
    return (
        <section className="mx-auto container py-20">
            <h2 className="text-3xl font-bold mb-6">My Skills</h2>
            <div className="flex flex-wrap gap-6 mx-auto justify-center">
                <SkillCard imageSrc="/html.png" name="HTML" level={4} skillDescription="Expert in HTML5 and semantic markup." />
                <SkillCard imageSrc="/css.png" name="CSS" level={4} skillDescription="Proficient in CSS3 and responsive design." />
                <SkillCard imageSrc="/javascript.png" name="JavaScript" level={4} skillDescription="Experienced in building dynamic web applications using JavaScript." />
                <SkillCard imageSrc="/typescript.png" name="TypeScript" level={3} skillDescription="Proficient in TypeScript for building scalable applications." />
                <SkillCard imageSrc="/react.png" name="React" level={3} skillDescription="Skilled in building user interfaces with React." />
                <SkillCard imageSrc="/php.png" name="PHP" level={4} skillDescription="Experienced in server-side rendering with Next.js." />
                <SkillCard imageSrc="/mysql.png" name="MySQL" level={4} skillDescription="Proficient in building backend services with Node.js." />
            </div>
        </section>
    )
}


