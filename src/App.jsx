/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FiArrowUpRight, FiBriefcase, FiDownload, FiGithub, FiLayers, FiLinkedin, FiMail, FiMapPin, FiMenu, FiX } from 'react-icons/fi';
import { FaPhp, FaPython, FaReact } from 'react-icons/fa6';
import { SiDjango, SiNextdotjs, SiFlutter, SiJavascript, SiTypescript, SiTailwindcss, SiVuedotjs } from 'react-icons/si';
import './App.css';

const projects = [
  { number: '01', name: 'Nubeep', type: 'Produto digital · parceria', description: 'Site institucional e quiz educacional gamificado para conectar estudantes de Engenharia de Produção a conteúdo e oportunidades.', stack: ['Next.js', 'TypeScript', 'React'], link: 'https://nubeep.vercel.app/', repo: 'https://github.com/Gutis-007/Nubeep-Quiz-', tone: 'nubeep', icon: '◒' },
  { number: '02', name: 'Study Async', type: 'Plataforma web · projeto pessoal', description: 'Ambiente de estudos em Django para criar flashcards, encarar desafios e acompanhar um relatório de desempenho ao final de cada sessão.', stack: ['Python', 'Django', 'Bootstrap'], link: 'https://studyasync.vercel.app/', repo: 'https://github.com/Gutis-007/Study_Async', tone: 'study', icon: '✳' },
  { number: '03', name: 'PapaCapim', type: 'Aplicativo mobile · projeto acadêmico', description: 'Rede social mobile com login, perfis e feed de publicações. Um exercício completo de arquitetura, consumo de API e gerenciamento de estado.', stack: ['Flutter', 'Dart', 'REST API'], link: 'https://github.com/Gutis-007/papacapim', repo: 'https://github.com/Gutis-007/papacapim', tone: 'papa', icon: '⌁' },
];

const skills = [
  ['Front-end', 'React, Next.js, Vue.js, JavaScript e TypeScript', <FaReact key="front-end" />], ['Back-end', 'Python, Django, PHP e APIs REST', <SiDjango key="back-end" />],
  ['Mobile', 'Flutter e Dart', <SiFlutter key="mobile" />], ['Arquitetura', 'Aplicações web, consumo de APIs e fluxos de login', <FiLayers key="arquitetura" />],
  ['Colaboração', 'Figma, Git/GitHub, AWS e Scrum/Kanban', <FiBriefcase key="colaboração" />],
];

const techIcons = [
  [<FaReact key="react" />, 'React'], [<SiNextdotjs key="next" />, 'Next.js'], [<FaPython key="python" />, 'Python'], [<SiDjango key="django" />, 'Django'],
  [<SiTypescript key="typescript" />, 'TypeScript'], [<SiFlutter key="flutter" />, 'Flutter'], [<SiJavascript key="javascript" />, 'JavaScript'], [<SiTailwindcss key="tailwind" />, 'Tailwind'],
  [<FaPhp key="php" />, 'PHP'], [<SiVuedotjs key="vue" />, 'Vue.js'],
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="portfolio-shell">
      <header className="site-header"><a href="#home" className="brand" onClick={closeMenu}><span>G</span> gutis.dev</a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <FiX /> : <FiMenu />}</button><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}><a href="#sobre" onClick={closeMenu}>Sobre mim</a><a href="#projetos" onClick={closeMenu}>Projetos</a><a href="#experiencia" onClick={closeMenu}>Experiência</a><a href="#contato" onClick={closeMenu}>Contato</a></nav></header>
      <main>
        <section id="home" className="hero-section"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Disponível para oportunidades</p><h1>Construo produtos<br /><em>que fazem sentido.</em></h1><p className="hero-intro">Sou Gustavo Ferreira, desenvolvedor Full Stack de Feira de Santana. Transformo ideias em experiências digitais claras, úteis e bem construídas.</p><div className="hero-actions"><a className="button button-primary" href="#projetos">Ver meus projetos <FiArrowUpRight /></a><a className="button button-quiet" href="/GustavoFerreira.pdf" target="_blank" rel="noopener noreferrer"><FiDownload /> Currículo</a></div></div><div className="hero-visual"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="code-card"><div className="code-top"><span /><span /><span /><small>gustavo.dev</small></div><div className="code-content"><span className="code-purple">const</span> developer = <span className="code-coral">&#123;</span><br /><span className="code-indent">name: <b>'Gustavo'</b>,</span><br /><span className="code-indent">focus: <b>'full-stack'</b>,</span><br /><span className="code-indent">coffee: <b>true</b></span><br /><span className="code-coral">&#125;</span></div></div><div className="hero-sticker">BA<br />&amp;<br />BR</div><img className="hero-photo" src="/Minha foto.png" alt="Gustavo Ferreira" /></div></section>
        <section id="sobre" className="about-section section-grid"><div><p className="section-kicker">01 / sobre mim</p><h2>Entre produto,<br /><em>código e contexto.</em></h2></div><div className="about-text"><p>Desenvolvedor Full Stack com 2+ anos de experiência em Front-End e Back-End. Atualmente, estudo Sistemas de Informação no IFBA e estagio na Nubank, onde participo do desenvolvimento de uma plataforma de gerenciamento de projetos ESG.</p><p>Gosto de entender o problema antes de escrever a solução. Trabalho bem em times ágeis, colaboro com diferentes áreas e consigo explicar funcionalidades de forma simples. Estou sempre explorando uma tecnologia nova para construir melhor.</p><div className="location"><FiMapPin /> Feira de Santana, Bahia</div></div></section>
        <section className="skills-section"><div className="section-heading"><p className="section-kicker">02 / como trabalho</p><h2>Ferramentas para<br /><em>tirar do papel.</em></h2></div><div className="skills-grid">{skills.map(([title, text, icon]) => <div className="skill-item" key={title}><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}</div></section>
        <section id="projetos" className="projects-section"><div className="section-heading projects-heading"><div><p className="section-kicker">03 / projetos selecionados</p><h2>Feito por mim,<br /><em>usado por alguém.</em></h2></div><span className="project-count">03 cases<br />em destaque</span></div><div className="projects-list">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.name}><div className="project-art"><span className="project-number">{project.number}</span><span className="project-mark">{project.icon}</span><div className="art-lines"><i /><i /><i /></div><span className="art-label">{project.name}</span></div><div className="project-info"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.link} target="_blank" rel="noreferrer">Abrir projeto <FiArrowUpRight /></a><a href={project.repo} target="_blank" rel="noreferrer" className="repo-link"><FiGithub /> Código</a></div></div></article>)}</div></section>
        <section id="experiencia" className="experience-section section-grid"><div><p className="section-kicker">04 / trajetória</p><h2>Experiência que<br /><em>vira repertório.</em></h2></div><div className="timeline"><div className="timeline-item"><span>out 2024 — agora</span><div><h3>Nubank <small>Full Stack Developer · Estagiário</small></h3><p>Desenvolvimento de uma plataforma de gerenciamento de projetos ESG por meio da parceria IFBA, UFBA e Nubank.</p></div></div><div className="timeline-item"><span>jun 2022 — out 2024</span><div><h3>Tecnolens Ltda <small>Suporte de TI</small></h3><p>Manutenção de equipamentos, coleta de feedbacks e treinamento de novas funcionalidades dos sistemas.</p></div></div><div className="timeline-item"><span>2022 — 2026</span><div><h3>IFBA <small>Bacharelado em Sistemas de Informação</small></h3><p>Formação superior em andamento. Também concluí a trilha Back-End Restic36, com 400h de Python e Django Rest.</p></div></div></div></section>
        <section className="tech-section"><p className="section-kicker">05 / stack</p><div className="tech-list">{techIcons.map(([icon, name]) => <div key={name}><span>{icon}</span>{name}</div>)}</div></section>
        <section id="contato" className="contact-section"><p className="section-kicker">06 / vamos conversar</p><h2>Tem uma ideia?<br /><em>Me chama.</em></h2><a className="contact-email" href="mailto:Gutisilva123@hotmail.com">Gutisilva123@hotmail.com <FiArrowUpRight /></a><div className="contact-footer"><span>Gustavo Ferreira · 2026</span><div><a href="https://github.com/Gutis-007" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href="mailto:Gutisilva123@hotmail.com"><FiMail /> E-mail</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a></div></div></section>
      </main>
    </div>
  );
};

export default App;
