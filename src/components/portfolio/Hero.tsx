import { ArrowDownRight, ArrowRight, Check, Cloud, Database, LockKeyhole, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const status = [[Server,"API ONLINE"],[Database,"DATABASE ONLINE"],[Cloud,"CLOUD ONLINE"],[LockKeyhole,"SECURITY ACTIVE"]] as const;
export function Hero() {
  return <section id="inicio" className="hero-section">
    <div className="hero-grid" aria-hidden="true" />
    <div className="content-shell relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
      <div className="pt-28 lg:pt-36">
        <div className="eyebrow-pill"><span className="status-dot" /> ANALISTA DE SISTEMAS • TECNOLOGIA • INOVAÇÃO</div>
        <h1 className="hero-title">Transformando problemas complexos em <span className="text-gradient">soluções digitais inteligentes.</span></h1>
        <p className="hero-copy">Sou Alex Martins, Analista de Sistemas fictício especializado em transformar necessidades de negócio em soluções tecnológicas eficientes, escaláveis e orientadas a resultados.</p>
        <div className="flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="lg" asChild><a href="#projetos">Conheça meu trabalho <ArrowDownRight /></a></Button><Button variant="glass" size="lg" asChild><a href="#contato">Entrar em contato <ArrowRight /></a></Button></div>
        <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"><span className="status-dot" /> Disponível para novos projetos <span className="text-border">•</span> Perfil demonstrativo</p>
      </div>
      <div className="system-visual" aria-label="Painel demonstrativo de status do sistema">
        <div className="system-topbar"><span>SYSTEM STATUS</span><span className="font-mono text-xs text-primary">AM_CORE / 06:24:19</span></div>
        <div className="grid gap-3 sm:grid-cols-2">{status.map(([Icon,label], i) => <div className="status-card" key={label}><Icon className="text-primary" size={18}/><div><span className="block text-[10px] text-muted-foreground">NODE_0{i+1}</span><strong className="text-xs font-medium"><Check className="mr-1 inline size-3 text-success"/> {label}</strong></div></div>)}</div>
        <div className="chart-box"><div className="chart-bars" aria-hidden="true">{[35,52,44,72,58,88,71,94,78,100,84,96].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><div className="flex justify-between text-[10px] text-muted-foreground"><span>REQUEST FLOW</span><span className="text-success">+24.8%</span></div></div>
        <div className="code-line"><span>01</span><code>pipeline.connect(<b>secure_cloud</b>)</code></div><div className="code-line"><span>02</span><code>status: <b>operational</b></code></div>
      </div>
    </div>
    <div className="content-shell mt-12 flex items-center gap-3 pb-8 text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span className="h-px w-10 bg-primary"/> Explore o sistema</div>
  </section>;
}
