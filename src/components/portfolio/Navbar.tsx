import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey); document.body.style.overflow = open ? "hidden" : "";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);
  return <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
    <div className="content-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
      <a href="#inicio" aria-label="Alex Martins — início" className="flex min-w-0 items-center gap-3">
        <span className="logo-mark">AM</span><span className="truncate font-display text-base font-semibold">Alex Martins</span>
      </a>
      <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
        {navItems.map(([label, id]) => <a className="nav-link" href={`#${id}`} key={id}>{label}</a>)}
        <Button variant="hero" asChild><a href="#contato">Vamos conversar</a></Button>
      </nav>
      <Button variant="glass" size="icon" className="lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div className={`mobile-menu lg:hidden ${open ? "mobile-menu-open" : ""}`} aria-hidden={!open}>
      <nav className="content-shell flex flex-col py-5" aria-label="Navegação móvel">
        {navItems.map(([label, id]) => <a className="mobile-nav-link" href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
        <Button variant="hero" size="lg" asChild><a href="#contato" onClick={() => setOpen(false)}>Vamos conversar</a></Button>
      </nav>
    </div>
  </header>;
}
