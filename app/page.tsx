import Image from 'next/image';
import Link from 'next/link';

import { GlobeIcon, MailIcon } from "lucide-react";

import { DATA } from "@/data/data";
import { Project } from '@/components/project';
import { School } from '@/components/school';
import { Skill } from '@/components/skill';
import { Work } from '@/components/work';
import { Button } from '@/components/button';

import headshot from '@/public/img/orange.png';

export default function Home() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <div>
            <h1>{DATA.name}</h1>
            <div className='parag'>
              <div>{DATA.description}</div>
              <div className='position'><GlobeIcon className='logos'/>{DATA.location}</div>
            </div>
            <div className='button_container'>
              <Button className='button' link={`mailto:${DATA.contacts.email}`}>
                <MailIcon className='icon'/>
              </Button>
              {DATA.contacts.social.map((social) => (
                <Button key={social.url} link={social.url} target='_blank' className='button'>
                  <social.icon className='icon' />
                </Button>
              ))}
            </div>
          </div>
          <div className='headshot'>
            <Link href={'/business-card'}>
              <Image src={headshot} alt={'HeadShot'} height={150} width={150}/>
            </Link>
          </div>
        </div>
        <section>
          <h2>{DATA.about.title}</h2>
          <hr />
          <p>{DATA.about.text}</p>
        </section>
        <section>
          <h2>{DATA.work.title}</h2>
          <hr />
          <div>
            {DATA.work.exp.map((exp) => {
              return (
                <Work key={exp.where}
                  where={exp.where}
                  when={exp.when}
                  role={exp.role}
                  text={exp.text}
                />
              );
            })}
            <br />
          </div>
        </section>
        <section>
          <h2>{DATA.education.title}</h2>
          <hr />
          <div>
            {DATA.education.schools.map((schools) => {
              return (
                <School key={schools.name}
                  name={schools.name}
                  type={schools.type}
                  where={schools.where}
                  when={schools.when}
                  text={schools.text}
                />
              );
            })}
            <br />
          </div>
        </section>
        <section>
          <h2>{DATA.skill.title}</h2>
          <hr />
          <div className='skill_container'>
            {DATA.skill.skill.map((skill) => {
              return (
                <Skill key={skill}
                  skill={skill}
                />
              );
            })}
          </div>
          <br />
        </section>
        <section className='projects'>
          <h2>{DATA.projects.title}</h2>
          <hr />
          <div className='prjct_container'>
            {DATA.projects.prjct.map((prjct) => {
              return (
                <Project key={prjct.title}
                  title={prjct.title}
                  description={prjct.description}
                  tag={prjct.tag}
                  link={prjct.link}
                />
              );
            })}
          </div>
        </section>
      </section>
    </main>
  )
}
