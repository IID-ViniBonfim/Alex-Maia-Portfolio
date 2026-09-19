import { Section, SectionHeading } from "./Section";
const groups=[
 ["Front-end",[["HTML",92],["CSS",88],["JavaScript",90],["TypeScript",86],["React",89]]],
 ["Back-end",[["Node.js",84],["Python",79],["Java",72],["APIs REST",90]]],
 ["Banco de dados",[["PostgreSQL",86],["MySQL",80],["MongoDB",74]]],
 ["Infraestrutura",[["Docker",82],["AWS",76],["Git",91],["Linux",78]]],
 ["Análise",[["UML",88],["BPMN",84],["Requisitos",94],["Documentação técnica",92]]],
] as const;
export function Skills(){return <Section id="stack"><SectionHeading eyebrow="05 / STACK" title="Stack tecnológica" copy="Conhecimentos organizados por domínio para criar soluções de ponta a ponta."/><div className="skills-grid">{groups.map(([group,skills])=><article className="skill-group" key={group}><h3>{group}</h3><div className="space-y-4">{skills.map(([name,value])=><div key={name}><div className="mb-2 flex justify-between text-xs"><span>{name}</span><span className="text-muted-foreground">{value}%</span></div><div className="skill-track"><i style={{width:`${value}%`}}/></div></div>)}</div></article>)}</div><p className="mt-5 text-[10px] uppercase tracking-[.15em] text-muted-foreground">Níveis fictícios e meramente demonstrativos</p></Section>}
