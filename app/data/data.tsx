import { github } from '@/components/icons/github'
import { linkedin } from '@/components/icons/linkedin'

export const DATA = {

    name: "Alessandro Busola",
    description: "",
    location: "IT",
    contacts: {
        tel: "+39 3333333333",
        email: "alessandro.busola@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/ilBuso",
                icon: github,
            },
            {
                name: "LinkedIn",
                url: "",
                icon: linkedin,
            },
        ],
    },
    about: {
        title: "About",
        text: "ma vattenne",
    },
    work: {
        title: "Work Experiences",
        exp: [
            {
                where: "Dunno",
                when: "Dunno",
                role: "Dunno",
                text: "Dunno",
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
                text: "studi generali",
            },
            {
                name: "Università degli Studi di Trento",
                type: "Univerità",
                where: "Trento, Italia",
                when: "2022 - Now",
                text: "Informatica",
            },
        ],
    },
    skill: {
        title: "Skills",
        skill: [
            "C",
            "C++",
            "Java",
            "SQL",
            "Unity - GameEngine"
        ]
    },
    projects: {
        title: "Projects",
        prjct:[
            {
                title: "Tris",
                description: "Tris in C",
                link: "https://github.com/ilBuso/Tris",
                tag: [
                    "C",
                    "Makefile",
                    "Side Project",
                ],
            },
            {
                title: "buso-ohmyzsh-theme",
                description: "OhMyZsh theme",
                link: "https://github.com/ilBuso/buso-ohmyzsh-theme",
                tag: [
                    "zsh",
                    "Color Theme",
                    "Side Project",
                ],
            },
            {
                title: "ASD - DescantaBauchi",
                description: "Progetto di Algoritmi e Strutture Dati (A.A. 2023/24)",
                link: "https://github.com/ilBuso/ASD-DescantaBauchi",
                tag: [
                    "C++",
                    "Algoritmi",
                    "Corso Universitario",
                ],
            },
            {
                title: "Portfolio",
                description: "This CV",
                link: "https://github.com/ilBuso/Portfolio",
                tag: [
                    "Next.js",
                    "TypeScript",
                    "Side Project",
                ],
            },
            {
                title: "Tank",
                description: "Gioco di Carriarmati in Java",
                link: "https://github.com/ilBuso/Tanks",
                tag: [
                    "Java",
                    "JavaFX",
                    "Side Project",
                ],
            },
            {
                title: "Meteo",
                description: "Un AndroidApp per le previsioni del meteo",
                link: "https://github.com/ilBuso/Meteo",
                tag: [
                    "Kotlin",
                    "Android Studio",
                    "Side Project",
                ],
            },
        ],
    },
}