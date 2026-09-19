import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Martins — Portfólio demonstrativo de Analista de Sistemas" },
      { name: "description", content: "Portfólio fictício de Alex Martins: análise de sistemas, desenvolvimento, dados, cloud e automação." },
      { property: "og:title", content: "Alex Martins — Analista de Sistemas" },
      { property: "og:description", content: "Modelo demonstrativo de portfólio tecnológico, com projetos e experiências fictícias." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
