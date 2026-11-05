import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Monitor,
  Layers3,
  Database,
  Smartphone,
  Workflow,
  Send,
  GraduationCap,
  ExternalLink,
  Check,
} from "lucide-react";

// =====================================================
// ANIMACIÓN DE APARICIÓN AL HACER SCROLL
// =====================================================
function Reveal({ children, className = "", delay = 0 }) {
  const [visible, setVisible] = useState(false);

  const elementRef = React.useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// =====================================================
// TECNOLOGÍAS
// =====================================================

const technologies = [
  {
    name: "HTML5",
    detail: "Estructura web",
    level: "Sólido",
    category: "Frontend",
  },
  {
    name: "CSS3",
    detail: "Diseño adaptable",
    level: "Sólido",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    detail: "Interactividad",
    level: "Sólido",
    category: "Frontend",
  },
  {
    name: "React.js",
    detail: "Interfaces dinámicas",
    level: "En formación",
    category: "Frontend",
  },
  {
    name: "Node.js",
    detail: "Entorno backend",
    level: "En formación",
    category: "Backend",
  },
  {
    name: "Express",
    detail: "APIs y servidores",
    level: "En formación",
    category: "Backend",
  },
  {
    name: "MongoDB",
    detail: "Bases de datos",
    level: "En formación",
    category: "Backend",
  },
  {
    name: "Git & GitHub",
    detail: "Control de versiones",
    level: "Uso práctico",
    category: "Herramientas",
  },
  {
    name: "Testing",
    detail: "Pruebas funcionales",
    level: "En formación",
    category: "Backend",
  },
];

// =====================================================
// PROYECTOS
// =====================================================

const projects = [
  {
    number: "01",
    name: "Lashes para vos",
    type: "Sitio web · Belleza",
    description:
      "Sitio web para un emprendimiento de extensiones de pestañas. Presenta los servicios y estilos disponibles, permite conocer los trabajos y facilita el contacto para consultar y reservar turnos.",
    stack: ["React", "JavaScript", "CSS"],
    url: "https://lashesparavos-pi.vercel.app/",
    repo: "https://github.com/IrinaIFernandez/proyecto-turnos",
    image: "/img/lashes-preview.png",
  },
  {
    number: "02",
    name: "Aldu Accesorios",
    type: "Tienda online · Belleza y accesorios",
    description:
      "Tienda web para un emprendimiento de belleza y accesorios, pensada para presentar sus productos y facilitar la experiencia de compra y consulta de los clientes.",
    stack: ["JavaScript", "Desarrollo web"],
    url: "https://tienda-web-orcin.vercel.app/",
    repo: "https://github.com/IrinaIFernandez/tienda-web",
    image: "/img/aldu-preview.png",
  },
];

// =====================================================
// FORMACIÓN
// =====================================================

const courses = [
  "Desarrollo Web",
  "JavaScript",
  "React JS",
  "Programación Backend I · Desarrollo Avanzado de Backend",
  "Backend II · Diseño y Arquitectura Backend",
  "Programación Backend III · Testing y Escalabilidad Flex",
];

// =====================================================
// ETIQUETA DE SECCIÓN
// =====================================================

function SectionLabel({ children, number }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
      <i />
    </div>
  );
}

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">IF</span>
          <span>IRINA INGA FERNÁNDEZ</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          {[
            ["Inicio", "#inicio"],
            ["Sobre mí", "#sobre-mi"],
            ["Tecnologías", "#tecnologias"],
            ["Proyectos", "#proyectos"],
            ["Formación", "#formacion"],
            ["Contacto", "#contacto"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        {/* =====================================================
            INICIO
        ===================================================== */}

        <section className="hero" id="inicio">
          <div className="hero-topline">
            <span>DESARROLLO WEB & FRONTEND</span>
            <span>PORTFOLIO</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow hero-reveal hero-delay-1">
                <span className="eyebrow-dot" />
                DESARROLLADORA WEB FULL STACK
              </p>

              <h1 className="hero-reveal hero-delay-2">
                Ideas que
                <br />
                se convierten en <em>web.</em>
              </h1>

              <p className="hero-description hero-reveal hero-delay-3">
                Hola, soy <strong>Irina Inga Fernández</strong>. Diseño y
                desarrollo experiencias digitales funcionales, atractivas y
                pensadas para conectar marcas con personas.
              </p>

              <div className="hero-actions hero-reveal hero-delay-4">
                <a className="button button-dark" href="#proyectos">
                  Ver mis proyectos <ArrowUpRight size={16} />
                </a>

                <a className="text-link" href="#contacto">
                  Contactarme <ArrowDown size={15} />
                </a>
              </div>

              <div className="hero-note hero-reveal hero-delay-5">
                <span className="note-line" />
                Formación Full Stack · Coderhouse
              </div>
            </div>

            <div
              className="hero-art hero-reveal hero-delay-3"
              aria-label="Composición gráfica abstracta"
            >
              <div className="art-circle circle-one" />
              <div className="art-circle circle-two" />

              <div className="art-frame">
                <span className="frame-top">CREATIVIDAD / CÓDIGO</span>

                <div className="frame-monogram">
                  IF<span>.</span>
                </div>

                <span className="frame-bottom">
                  DISEÑO DIGITAL CON PROPÓSITO
                </span>
              </div>

              <div className="floating-card">
                <Code2 size={17} />

                <span>
                  Construyendo
                  <br />
                  para la web
                </span>

                <b>↗</b>
              </div>

              <span className="art-index">01 — 06</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>DISEÑO · DESARROLLO · EXPERIENCIA</span>
            <span>DESLIZÁ PARA EXPLORAR ↓</span>
          </div>
        </section>

        {/* =====================================================
            SOBRE MÍ
        ===================================================== */}

        <section className="intro-section" id="sobre-mi">
          <Reveal className="intro-heading">
            <SectionLabel number="01">UN POCO SOBRE MÍ</SectionLabel>

            <h2>
              Desarrollo digital
              <br />
              con <em>intención.</em>
            </h2>
          </Reveal>

          <Reveal className="intro-copy" delay={120}>
            <p className="lead">
              Me interesa crear sitios web que combinen una estética cuidada
              con una experiencia simple y funcional.
            </p>

            <p>
              Soy desarrolladora web con formación Full Stack en Coderhouse.
              Durante mi trayecto formativo incorporé conocimientos de
              desarrollo frontend y backend, creación de interfaces, lógica de
              programación, diseño de APIs, testing y buenas prácticas.
            </p>

            <p>
              Disfruto aprender, resolver desafíos y transformar ideas en
              proyectos digitales. Actualmente busco seguir creciendo y
              colaborar en nuevos proyectos.
            </p>

            <a className="underlined-link" href="#contacto">
              ¿Tenés una idea? Conversemos <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </section>

        {/* =====================================================
            TECNOLOGÍAS
        ===================================================== */}

        <section className="tech-section" id="tecnologias">
          <Reveal className="dark-section-head">
            <SectionLabel number="02">
              HERRAMIENTAS Y CONOCIMIENTOS
            </SectionLabel>

            <div className="tech-title-row">
              <h2>
                Tecnologías con las
                <br />
                <em>que trabajo.</em>
              </h2>

              <p>
                Herramientas y tecnologías incorporadas durante mi formación
                y aplicadas en proyectos prácticos.
              </p>
            </div>
          </Reveal>

          <div className="tech-grid">
            {technologies.map((tech, i) => (
              <Reveal
                key={tech.name}
                className="tech-card-reveal"
                delay={i * 70}
              >
                <article className="tech-card">
                  <div className="tech-card-top">
                    <span>0{i + 1}</span>
                    <span>{tech.category}</span>
                  </div>

                  <div className="tech-icon">
                    {tech.category === "Frontend" ? (
                      <Monitor />
                    ) : tech.category === "Backend" ? (
                      <Database />
                    ) : (
                      <Workflow />
                    )}
                  </div>

                  <h3>{tech.name}</h3>

                  <p>{tech.detail}</p>

                  <div className="tech-level">
                    <span>{tech.level}</span>
                    <i />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="tech-footnote" delay={150}>
            <span className="gold-star">✳</span>

            Aprendizaje continuo, práctica constante y curiosidad por nuevas
            tecnologías.
          </Reveal>
        </section>

        {/* =====================================================
            PROYECTOS
        ===================================================== */}

        <section className="projects-section" id="proyectos">
          <Reveal>
            <SectionLabel number="03">TRABAJOS SELECCIONADOS</SectionLabel>

            <div className="projects-heading">
              <h2>
                Proyectos que
                <br />
                <em>cuentan historias.</em>
              </h2>

              <p>
                Una selección de proyectos en los que puse en práctica mis
                conocimientos de desarrollo web.
              </p>
            </div>
          </Reveal>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <Reveal key={project.number} delay={i * 140}>
                <article className="project-card">
                  <a
                    className="project-visual"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver ${project.name}`}
                  >
                    <img
                      src={project.image}
                      alt={`Vista previa de ${project.name}`}
                      className="project-image"
                    />

                    <span className="project-open">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>

                  <div className="project-info">
                    <div>
                      <span className="project-number">
                        {project.number} / {project.type}
                      </span>

                      <h3>{project.name}</h3>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-bottom">
                      <div className="tag-list">
                        {project.stack.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir ${project.name}`}
                        >
                          <ExternalLink size={17} />
                        </a>

                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Ver código de ${project.name}`}
                        >
                          <Github size={17} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="projects-disclaimer" delay={100}>
            Proyectos desarrollados y publicados en Vercel. Podés visitar cada
            sitio y consultar su código fuente.
          </Reveal>
        </section>

        {/* =====================================================
            FORMACIÓN
        ===================================================== */}

        <section className="formation-section" id="formacion">
          <Reveal className="formation-left">
            <SectionLabel number="04">FORMACIÓN</SectionLabel>

            <h2>
              Aprender para
              <br />
              <em>seguir creando.</em>
            </h2>

            <p>
              Formación en desarrollo Full Stack realizada en Coderhouse,
              con recorrido por tecnologías frontend y backend.
            </p>

            <div className="education-stamp">
              <GraduationCap size={22} />

              <span>
                FORMACIÓN
                <br />
                <b>CODERHOUSE</b>
              </span>
            </div>
          </Reveal>

          <div className="course-list">
            {courses.map((course, i) => (
              <Reveal key={course} delay={i * 90}>
                <div className="course-row">
                  <span>0{i + 1}</span>
                  <p>{course}</p>
                  <Check size={16} />
                </div>
              </Reveal>
            ))}

            <Reveal delay={100}>
              <p className="course-note">
                Certificaciones y trayecto formativo completados.
              </p>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            SERVICIOS
        ===================================================== */}

        <section className="services-section">
          <Reveal>
            <SectionLabel number="05">QUÉ PUEDO HACER</SectionLabel>

            <h2>
              Soluciones web
              <br />
              para <em>tu proyecto.</em>
            </h2>
          </Reveal>

          <div className="services-grid">
            <Reveal delay={0}>
              <article>
                <Monitor />

                <span>01</span>

                <h3>Landing pages</h3>

                <p>
                  Páginas de presentación para comunicar una propuesta y
                  destacar un producto o servicio.
                </p>
              </article>
            </Reveal>

            <Reveal delay={100}>
              <article>
                <Layers3 />

                <span>02</span>

                <h3>Sitios institucionales</h3>

                <p>
                  Sitios web claros y adaptables para emprendimientos,
                  profesionales y negocios.
                </p>
              </article>
            </Reveal>

            <Reveal delay={200}>
              <article>
                <Smartphone />

                <span>03</span>

                <h3>Diseño responsive</h3>

                <p>
                  Interfaces pensadas para ofrecer una buena experiencia en
                  celulares, tablets y computadoras.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            CONTACTO
        ===================================================== */}

        <footer className="footer" id="contacto">
          <Reveal className="footer-top">
            <div>
              <SectionLabel number="06">CONTACTO</SectionLabel>

              <h2>
                ¿Creamos algo
                <br />
                <em>juntos?</em>
              </h2>

              <p>
                Si tenés una idea, un proyecto o una oportunidad laboral,
                me encantaría conversar.
              </p>

              <a
                className="button button-light"
                href="mailto:irinaif2025@gmail.com"
              >
                Escribime <Send size={15} />
              </a>
            </div>

            <div className="footer-contact">
              <span className="footer-label">CONTACTO</span>

              <a href="mailto:irinaif2025@gmail.com">
                <Mail size={17} /> irinaif2025@gmail.com
              </a>

              <a
                href="https://github.com/IrinaIFernandez"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>

            <div className="footer-monogram">
              IF<span>.</span>
            </div>
          </Reveal>

          <div className="footer-bottom">
            <span>© 2026 IRINA INGA FERNÁNDEZ</span>
            <a href="#inicio">VOLVER ARRIBA ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;