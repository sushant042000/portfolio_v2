import React from 'react';

import { personalLinks } from '@/app/constants/user-data';

import { FloatingDock } from '../ui/floating-dock';

export function ContactMe() {
    return (
        <div id="contact-me" className="mx-auto h-auto max-w-5xl px-8 py-20 md:py-32">
            <div className="gap:1 flex h-40 w-full flex-col items-center justify-center md:gap-4">
                <h1 className="text-2xl font-bold dark:text-white md:pt-10 md:text-4xl">Contact Me</h1>
                <FloatingDock mobileClassName="translate-y-20" items={personalLinks} />
            </div>
        </div>
    );
}
