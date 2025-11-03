import React from 'react';
import WordCard from '../wordcard/wordcard';




export default function MyWork() {
    return (
        <section className="mx-auto container py-20" id="works">
            <h2 className="p-8 text-3xl font-bold mb-6">制作物</h2>
            <div className="flex flex-wrap gap-6 mx-auto justify-center">
                <WordCard />
            </div>
        </section>
    )
}
