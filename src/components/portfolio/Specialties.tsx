import { ArrowUpRight } from "lucide-react";
import { specialties } from "./data";
import { Section, SectionHeading } from "./Section";
export function Specialties(){return <Section id="especialidades" className="section-band"><SectionHeading eyebrow="02 / ESPECIALIDADES" title="Áreas em que transformo desafios em soluções."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{specialties.map((item,i)=><article className="specialty-card" key={item.title}><div className="flex items-start justify-between"><span className="icon-box"><item.icon/></span><span className="text-xs text-muted-foreground">0{i+1}</span></div><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" aria-hidden="true"/></article>)}</div></Section>}
