import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Specialties } from "./Specialties";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Workflow } from "./Workflow";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
export function Portfolio(){useEffect(()=>{const els=document.querySelectorAll(".reveal");const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add("is-visible")),{threshold:.08});els.forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);return <><Navbar/><main><Hero/><About/><Specialties/><Projects/><Experience/><Skills/><Workflow/><Contact/></main><Footer/></>}
