import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import commingSoon from '../../../public/comming.png';
import foodieHubImage from '../../../public/foodiehub.png';

export const experience = [
    {
        title: 'STDT IT Services',
        description: (
            <ul className="list-disc">
                <li>
                    Developing a seafarers' website where users can enroll in courses and institutes can create and post courses, allowing seafarers
                    to book seats in specific courses.
                </li>
                <li>Utilizing React to build a robust and user-friendly application for seamless course management and enrollment.</li>
            </ul>
        ),
        badge: 'Software Engineer/Jan 2024 - Present'
    },
    {
        title: 'CODE-B',
        description: (
            <ul className="list-disc">
                <li>
                    Immersed in learning the MERN stack (MongoDB, Express.js, React, Node.js), gaining hands-on experience with modern web development
                    technologies.
                </li>
                <li>
                    Gained insights into company operations, understanding project workflows and the collaborative processes involved in delivering
                    successful outcomes.
                </li>
                <li>Contributed to the development website as part of a volunteer web development team.</li>
            </ul>
        ),
        badge: 'Internship'
    }
];

export const skills = [
    {
        title: 'React.js',
        link: 'https://react.dev/',
        icon: <FaReact />
    },
    {
        title: 'Next.js',
        link: 'https://nextjs.org',
        icon: <TbBrandNextjs />
    },
    {
        title: 'Tailwind',
        link: 'https://tailwindcss.com',
        icon: <SiTailwindcss />
    },
    {
        title: 'MUI',
        link: 'https://mui.com/',
        icon: <SiMui />
    },
    {
        title: 'Bootstrap',
        link: 'https://getbootstrap.com/',
        icon: <FaBootstrap />
    },
    {
        title: 'Node js',
        link: 'https://nodejs.org/en/download/package-manager',
        icon: <FaNodeJs />
    }
];

export const projects = [
    {
        description: 'React learning project',
        title: 'Foodie Hub',
        src: foodieHubImage,
        ctaText: 'View Project',
        ctaLink: 'https://sushant-foodiehub.netlify.app/',
        content: () => (
            <p>
                Foodie Hub is a project designed to deepen my understanding of React by developing a food content platform. This project allows me to
                gain hands-on experience with React’s features and create a fully functional web application.
            </p>
        )
    },
    {
        description: 'Upcoming project',
        title: 'Coming Soon',
        src: commingSoon,
        ctaText: 'Stay Tuned',
        ctaLink: '#',
        content: () => <p>Stay tuned for more details on this exciting upcoming project!</p>
    }
];

export const personalLinks = [
    {
        title: 'LinkedIn',
        icon: <IconBrandLinkedin className="size-full text-neutral-500 dark:text-neutral-300" />,
        href: 'https://www.linkedin.com/in/sushant-bailkar'
    },
    {
        title: 'GitHub',
        icon: <IconBrandGithub className="size-full text-neutral-500 dark:text-neutral-300" />,
        href: 'https://github.com/sushant042000?tab=repositories'
    },

    {
        title: 'Instagram',
        icon: <IconBrandInstagram className="size-full text-neutral-500 dark:text-neutral-300" />,
        href: 'https://www.instagram.com/_sushant_bailkar_?igsh=NXVyNnQ3MTJ1Z2Nm'
    },
    {
        title: 'Email',
        icon: <IconMail className="size-full text-neutral-500 dark:text-neutral-300" />,
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sushantbailkar2504@gmail.com'
    }
];
