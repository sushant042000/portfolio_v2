import Link from 'next/link';
import React from 'react';

import { skills } from '@/app/constants/user-data';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Skills
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative mx-auto flex h-52 w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
                    >
                        <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

                        <EvervaultCard text={item.title} icon={item.icon} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
