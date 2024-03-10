import Image from 'next/image';
import { GlobeIcon, MailIcon } from "lucide-react";

import { DATA } from "@/data/data";
import { Button } from '@/components/button';

import style from './business-card.module.css'
import headshot from '@/public/img/orange.png';

export default function BusinessCard() {
    return(
        <main>
            <section className='container'>
                <section className={style.card}>
                    <section className='headshot'>
                        <Image src={headshot} alt={'HeadShot'} height={200} width={200}/>
                    </section>
                    <section className={style.description}>
                        <h2>{DATA.name}</h2>
                        <p>{DATA.job}</p>
                    </section>
                    <section className={style.button_container}>
                        <Button link={`mailto:${DATA.contacts.email}`}>
                            <MailIcon className={style.icon}/><div>&nbsp;E-Mail</div>
                        </Button>
                    </section>
                    <section className={style.about}>
                        {DATA.about.short_text}
                    </section> 
                    <section className={style.button_container}>
                        {DATA.contacts.social.map((social) => (
                            <Button key={social.url} link={social.url} target='_blank'>
                                <social.icon className={style.icon} />
                            </Button>
                        ))}
                        <Button link={DATA.contacts.website}>
                            <GlobeIcon className={style.icon} />
                        </Button>
                    </section>
                </section>
            </section>
        </main>
    )
}