import { Bot, Braces, Cloud, Database, ScanSearch, ShieldCheck } from "lucide-react";

export const navItems = [
  ["Início", "inicio"], ["Sobre", "sobre"], ["Especialidades", "especialidades"],
  ["Projetos", "projetos"], ["Experiência", "experiencia"], ["Contato", "contato"],
] as const;

export const specialties = [
  { icon: ScanSearch, title: "Análise de Sistemas", text: "Levantamento de requisitos, modelagem de processos, documentação e definição de soluções." },
  { icon: Braces, title: "Desenvolvimento de Software", text: "Criação e evolução de aplicações web, APIs e sistemas corporativos." },
  { icon: Database, title: "Banco de Dados", text: "Modelagem, consultas, otimização e organização de dados." },
  { icon: Cloud, title: "Cloud Computing", text: "Arquitetura e integração de soluções utilizando serviços em nuvem." },
  { icon: Bot, title: "Automação", text: "Automação de tarefas e processos para aumentar produtividade e reduzir erros." },
  { icon: ShieldCheck, title: "Segurança", text: "Boas práticas de segurança, controle de acesso e proteção de sistemas." },
];

export type Project = {
  id: string; name: string; description: string; tech: string[]; problem: string; objective: string; solution: string; results: string;
};

export const projects: Project[] = [
  { id: "01", name: "Orion Business Intelligence", description: "Plataforma fictícia para análise de indicadores empresariais, permitindo acompanhar métricas e visualizar dados em dashboards interativos.", tech: ["React", "Node.js", "PostgreSQL", "Power BI"], problem: "Indicadores estratégicos dispersos e decisões lentas.", objective: "Centralizar métricas e tornar a leitura dos dados mais clara.", solution: "Painéis modulares, filtros inteligentes e uma camada segura de integração.", results: "Redução demonstrativa de 42% no tempo de análise gerencial." },
  { id: "02", name: "FlowTask", description: "Sistema de gerenciamento de tarefas e processos desenvolvido para melhorar a produtividade de equipes.", tech: ["React", "TypeScript", "Node.js", "MongoDB"], problem: "Fluxos fragmentados e baixa visibilidade sobre entregas.", objective: "Organizar tarefas, responsáveis e prazos em um só ambiente.", solution: "Quadros adaptáveis, automações de rotina e alertas contextuais.", results: "Ganho fictício de 31% na previsibilidade das entregas." },
  { id: "03", name: "HealthData", description: "Plataforma fictícia de organização e visualização de dados para instituições de saúde.", tech: ["Python", "FastAPI", "PostgreSQL", "Docker"], problem: "Dados operacionais complexos e pouco acessíveis.", objective: "Facilitar consultas preservando organização e segurança.", solution: "API estruturada, trilhas de auditoria e visualizações por perfil.", results: "Tempo demonstrativo de consulta reduzido em 55%." },
  { id: "04", name: "CloudMonitor", description: "Dashboard para monitoramento de infraestrutura e serviços em nuvem.", tech: ["Python", "AWS", "Docker", "Grafana"], problem: "Incidentes identificados tarde e sinais isolados.", objective: "Antecipar riscos com observabilidade centralizada.", solution: "Telemetria unificada, alertas por criticidade e histórico comparativo.", results: "Disponibilidade fictícia elevada para 99,96%." },
];
