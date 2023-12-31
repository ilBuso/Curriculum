import Image from 'next/image'
import { Button } from 'antd';

import { DATA } from "@/data/data";
import { Project } from '@/components/project';
import { School } from '@/components/school';
import { Skill } from '@/components/skill';

import headshot from '@/img/duck.jpg'
import { Work } from '@/components/work';

export default function Home() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <div>
            <h1>{DATA.name}</h1>
            <p>{DATA.description}</p>
            <p>{DATA.location}</p>
            <div>
              {DATA.contacts.social.map((social) => (
                <Button key={social.name} className="social_logo" >
                  <a href={social.url}>
                    <social.icon className="icon" />
                  </a>
                </Button>
              ))}
            </div>
            <div><a href={`emailto:${DATA.contacts.email}`}>{DATA.contacts.email}</a></div>
            <div><a href={`tel:${DATA.contacts.tel}`}>{DATA.contacts.tel}</a></div>
          </div>
          <span>
            <Image src={headshot} alt={'HeadShot'} height={112} width={112}/>
          </span>
        </div>
        <section>
          <h2>{DATA.about.title}</h2>
          <p>{DATA.about.text}</p>
        </section>
        <section>
          <h2>{DATA.work.title}</h2>
          <p>
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
          </p>
        </section>
        <section>
          <h2>{DATA.education.title}</h2>
          <p>
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
          </p>
        </section>
        <section>
          <h2>{DATA.skill.title}</h2>
          <div>
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
          <div>
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
