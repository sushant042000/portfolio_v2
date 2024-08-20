'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';

import { projects } from '@/app/constants/user-data';

import { useOutsideClick } from '../../hooks/use-outside-click';

export default function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false);
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-10 size-full bg-black/20"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className="fixed inset-0  z-[100] grid place-items-center">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05
                                }
                            }}
                            className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white lg:hidden"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="flex size-full  max-w-[500px] flex-col overflow-hidden  bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="h-80 w-full object-cover object-top sm:rounded-t-lg lg:h-80"
                                />
                            </motion.div>

                            <div>
                                <div className="flex items-start justify-between p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="relative px-4 pt-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                                    >
                                        {typeof active.content === 'function' ? active.content() : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <div className="mx-auto w-full max-w-5xl px-8 pb-8">
                <h1 id="Projetcs" className="max-w-5xl  pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                    Projects
                </h1>
            </div>
            <ul className="mx-auto w-full max-w-5xl gap-4">
                {projects.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => (card.title === 'Coming Soon' ? setActive(false) : setActive(card))}
                        className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row"
                    >
                        <div className="flex flex-col gap-4 md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    objectFit="contain"
                                    className="size-40 rounded-lg object-cover object-top md:size-14"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            disabled={card.title === 'Coming Soon'}
                            className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-green-500 hover:text-white md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05
                }
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
