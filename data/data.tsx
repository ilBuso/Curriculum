import { github } from '@/components/icons/github'
import { linkedin } from '@/components/icons/linkedin'

export const DATA = {

    name: "Alessandro Busola",
    description: "Studente di informatica al 2° anno presso l'università di Trento",
    location: "Verona, Italia",
    contacts: {
        tel: "+39 3333333333", //this number is wrong don't try to call it
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
    },
    about: {
        title: "Profilo",
        text: "Sono uno studente di Informatica con una grande passione per tutto il mondo del Software e Hardware. Nel tempo libero mi piace portare avanti i miei 'Side Projects' e informarmi sulle ultime novità nel campo della tecnologia. Sono sempre aperto a nuove esperienze e ad imparare nuove cose.",
    },
    work: {
        title: "Esperienze",
        exp: [
            {
                where: "Rifugio Dardo",
                when: "2019 - Now",
                role: "Cameriere",
                text: "Durante la vacanze estive lavoro come cameriere presso un rifugio nelle montagne della Lessinia",
            },
        ],
    },
    education: {
        title: "Educazione",
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
                text: "Cosro di Laurea Triennale in Informatica",
            },
        ],
    },
    skill: {
        title: "Abilità",
        skill: [
            "C",
            "C++",
            "Java",
            "SQL",
            "MongoDB",
            "NextJS",
            "Unity - GameEngine"
        ]
    },
    projects: {
        title: "Progetti",
        prjct:[
            {
                title: "Tris",
                description: "Gioco di Tris in C",
                link: "https://github.com/ilBuso/Tris",
                tag: [
                    "C",
                    "Makefile",
                    "Side Project",
                ],
            },
            {
                title: "buso-ohmyzsh-theme",
                description: "Un tema per zsh con OhMyZsh",
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
                    "Work In Progress",
                    "C++",
                    "Algoritmi",
                    "Corso Universitario",
                ],
            },
            {
                title: "Portfolio",
                description: "Curriculum Web (Questa pagina web)",
                link: "https://github.com/ilBuso/Portfolio",
                tag: [
                    "Next.js",
                    "TypeScript",
                    "Side Project",
                ],
            },
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
                    "Side Project",
                ],
            },
        ],
    },
}
