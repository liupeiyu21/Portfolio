import React from 'react';
import AfterClassWorkCard from '../afterclassworkcard/afterclassworkcard';




export default function AfterClassWork() {
    return (
        <section className="mx-auto container py-20" id="after-class-works">
            <h2 className="p-8 text-3xl font-bold mb-6">課外制作物</h2>
            <div className="flex flex-wrap gap-6 mx-auto justify-center">
                <AfterClassWorkCard />
            </div>
        </section>
    )
}
