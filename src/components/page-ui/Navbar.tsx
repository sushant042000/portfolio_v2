'use client';
// import {
//   GitHubLogoIcon,
//   LinkedInLogoIcon,
//   TwitterLogoIcon,
//   VercelLogoIcon,
// } from "@radix-ui/react-icons";
import React, { useState } from 'react';

import { personalLinks } from '@/app/constants/user-data';
import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        {personalLinks.map((item) => (
                            <HoveredLink key={item.title} href={item.href} rel="noopener noreferrer" target="_blank">
                                <div className="flex gap-1">
                                    <div>{item.icon}</div>

                                    {item.title}
                                </div>
                            </HoveredLink>
                        ))}
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
