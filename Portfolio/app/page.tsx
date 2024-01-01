import Image from 'next/image'
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

import { DATA } from "@/data/data";
import { Project } from '@/components/project';
import { School } from '@/components/school';
import { Skill } from '@/components/skill';
import { Work } from '@/components/work';

import headshot from '@/img/orange.png'


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
              <a href={`mailto:${DATA.contacts.email}`}>
                <button className='social_logo'>
                  <MailIcon className='icon'/>
                </button>
              </a>
              {/*<a href={`tel:${DATA.contacts.tel}`}>
                <button className='social_logo'>
                  <PhoneIcon className='icon' />
                </button>
              </a>*/}
              {DATA.contacts.social.map((social) => (
                <a key={social.name} href={social.url} target='_blank'>
                  <button  className='social_logo'>
                    <social.icon className='icon' />
                  </button>
                </a>
                
              ))}
            </div>
          </div>
          <span>
            <Image src={headshot} alt={'HeadShot'} height={150} width={150}/>
          </span>
        </div>
        <section>
          <h2>{DATA.about.title}</h2>
          <p>{DATA.about.text}</p>
        </section>
        <section>
          <h2>{DATA.work.title}</h2>
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
          </div>
        </section>
        <section>
          <h2>{DATA.education.title}</h2>
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
          </div>
        </section>
        <section>
          <h2>{DATA.skill.title}</h2>
          <div className='skill_container'>
            {DATA.skill.skill.map((skill) => {
              return (
                <Skill key={skill}
                  skill={skill}
                />
              );
            })}
          </div>
        </section>
        <section className='projects'>
          <h2>{DATA.projects.title}</h2>
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
