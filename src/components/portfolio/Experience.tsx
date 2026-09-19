import { Section, SectionHeading } from "./Section";
const items=[
 ["2024 — Atual","Analista de Sistemas Sênior","TechVision Solutions","Atuação na análise de requisitos, documentação, integração de sistemas e desenvolvimento de soluções digitais."],
 ["2022 — 2024","Analista de Sistemas","DigitalCore Tecnologia","Participação em projetos de transformação digital, automação de processos e integração de APIs."],
 ["2020 — 2022","Assistente de Tecnologia","Inova Systems","Suporte à equipe de desenvolvimento, análise de incidentes e documentação de processos."],
];
export function Experience(){return <Section id="experiencia" className="section-band"><SectionHeading eyebrow="04 / EXPERIÊNCIA" title="Uma trajetória orientada por evolução."/><div className="timeline">{items.map(([date,role,company,text],i)=><article className="timeline-item" key={date}><div className="timeline-dot">0{i+1}</div><div><span className="text-xs font-semibold uppercase tracking-[.15em] text-primary">{date}</span><h3 className="mt-2 font-display text-xl font-semibold">{role}</h3><p className="mt-1 text-sm font-medium text-foreground/80">{company}</p><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{text}</p></div></article>)}</div><p className="mt-8 text-[10px] uppercase tracking-[.15em] text-muted-foreground">Experiências e empresas fictícias • conteúdo demonstrativo</p></Section>}
