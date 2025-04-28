import { github } from '@/components/icons/github'
import { linkedin } from '@/components/icons/linkedin'

export const DATA = {

    name: "Alessandro Busola",
    job: "Software Developer",
    description: "Computer Science at Univeristy of Trento",
    location: "Verona, Italy",
    contacts: {
        email: "alessandro.busola@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/ilBuso",
                icon: github,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alessandro-busola",
                icon: linkedin,
            },
        ],
        website: "https://ilbuso.github.io/Curriculum/",
    },
    about: {
        title: "Profilo",
        text: "I am a Computer Science student with a strong passion for both software and hardware, with a particular focus on embedded systems. In my free time, I enjoy working on side projects and staying updated on the latest technological advancements. I am always eager to embrace new challenges and expand my skills.",
        short_text: "Computer science student at University of Trento. Passionate about technology and programming. Always looking for new experiences.",
    },
    work: {
        title: "Experiences",
        exp: [
            {
                where: "Rifugio Dardo",
                when: "2019 - 2024",
                role: "Waiter",
                text: "During the summer holidays, I have worked as a waiter at a mountain lodge in the Lessinia region.",
            },
            {
                where: "University of Trento",
                when: "2024 - 2025",
                role: "Tutor",
                text: "During the academic year, I served as a tutor for a university course.",
            },
        ],
    },
    education: {
        title: "Education",
        schools: [
            {
                name: "ISS Calabrese-Levi",
                type: "Liceo Scientifico Scienze Applicate",
                where: "San Floriano, Verona, Italia",
                when: "2016 - 2022",
                text: "Diploma di scuola superiore",
            },
            {
                name: "Università degli Studi di Trento",
                type: "Univerità",
                where: "Trento, Italia",
                when: "2022 - Now",
                text: "Corso di Laurea Triennale in Informatica",
            },
        ],
    },
    skill: {
        title: "Abilità",
        skill: [
            "C",
            "C++",
            "Java",
            "Rust",
            "Bash",
            "MySQL",
            "MongoDB",
            "NextJS",
            "Unity - GameEngine",
            "MarkDown",
            "Makefile",
            "Git",
            "GitHub",
        ]
    },
    projects: {
        title: "Progetti",
        prjct:[
            {
                title: "Zombie",
                description: "Gioco e GameEngine in c++",
                link: "https://github.com/ilBuso/zombie",
                tag: [
                    "Work In Progress",
                    "c++",
                    "Makefile",
                    "clang-format",
                    "SDL",
                ],
            },
            {
                title: "Notes",
                description: "CLI tool for notes",
                link: "https://github.com/ilBuso/notes",
                tag: [
                    "C",
                    "Makefile",
                ],
            },
            {
                title: "buso-ohmyzsh-theme",
                description: "Un tema per zsh con OhMyZsh",
                link: "https://github.com/ilBuso/buso-ohmyzsh-theme",
                tag: [
                    "zsh",
                    "Color Theme",
                    "Manjaro",
                ],
            },
            {
                title: "Orione",
                description: "Custom MSP432 keyboard with firmware and PCB design",
                link: "https://github.com/ilBuso/Orione",
                tag: [
                    "Work In Progress",
                    "Univerisity Course",
                    "C",
                    "MSP432",
                    "Keyboard",
                    "PCB",
                ],
            },
            {
                title: "Portfolio",
                description: "Curriculum Web (Questa pagina web)",
                link: "https://github.com/ilBuso/Portfolio",
                tag: [
                    "Next.js",
                    "TypeScript",
                ],
            },
            {
                title: "Rustastic",
                description: "Network simulation using Drones",
                link: "https://github.com/Rustastic",
                tag: [
                    "Work In Progress",
                    "Univerisity Course",
                    "Rust",
                    "GitHub Organization",
                    "Crossbeam",
                    "GUI",
                    "Multi-Thread",
                ],
            },
        ],
    },
}
