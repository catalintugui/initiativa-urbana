import "./App.css";

const actionLinks = [
    {
        title: "Trimite o sugestie",
        description:
            "Completează chestionarul comunității ca să prioritizăm ideile care contează pentru vecini.",
        href: "https://forms.gle/8UxvXdwvnsQsXcMG6",
        label: "Completează chestionarul",
    },
    {
        title: "Semnează petiția",
        description:
            "Susține demersul pentru un cartier civilizat în zona Matei Basarab, Căuzași, Anton Pann.",
        href: "https://campaniamea.declic.ro/petitions/vrem-un-cartier-civilizat-in-zona-centrala-istorica-matei-basarab-cauzasi-anton-pann",
        label: "Vezi petiția",
    },
    {
        title: "Urmărește problemele",
        description:
            "Consultă tabelul cu probleme și sugestii strânse din conversațiile comunității.",
        href: "https://docs.google.com/spreadsheets/d/152dNblz9J_r01m5dogjYnd3pDsGuk6nu5Kb7h3CTcL4/",
        label: "Deschide tabelul",
    },
];

const projects = [
    {
        eyebrow: "Un oraș curat",
        title: "Mai puțin gunoi, mai multă grijă",
        description:
            "Identificăm punctele critice, strângem sesizări și transformăm curățenia într-un obicei vizibil de cartier.",
    },
    {
        eyebrow: "Străzi deschise",
        title: "Spațiu public pentru oameni",
        description:
            "Promovăm străzi sigure, plimbabile și prietenoase cu familiile, copiii, seniorii și micile afaceri locale.",
    },
    {
        eyebrow: "Transport alternativ",
        title: "Drumuri mai simple prin cartier",
        description:
            "Încurajăm mersul pe jos, bicicleta și soluțiile de mobilitate care reduc presiunea pe străzile istorice.",
    },
];

const communityChannels = [
    {
        title: "WhatsApp",
        href: "https://chat.whatsapp.com/JLHQT1PrW1MHUHq43DwvOu",
        label: "Intră în grup",
        icon: "whatsapp",
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/groups/antonpanncauzasi",
        label: "Vezi comunitatea",
        icon: "facebook",
    },
    {
        title: "Email",
        href: "mailto:initiativaUrbana.Cauzasi@gmail.com",
        label: "Scrie-ne",
        icon: "email",
    },
];

type ChannelIconName = (typeof communityChannels)[number]["icon"];

function ChannelIcon({ name }: { name: ChannelIconName }) {
    if (name === "whatsapp") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2a9.86 9.86 0 0 0-8.55 14.76L2.2 21.55l4.9-1.24A9.92 9.92 0 1 0 12.04 2Zm0 1.83a8.08 8.08 0 0 1 6.92 12.25 8.08 8.08 0 0 1-10.88 2.74l-.35-.2-2.91.74.77-2.82-.23-.37a8.05 8.05 0 0 1 6.68-12.34Zm-3.3 3.83c-.2 0-.52.08-.79.38-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.06 3.28 5.08 4.47 2.51.99 3.02.79 3.56.74.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57Z" />
            </svg>
        );
    }

    if (name === "facebook") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22A10.03 10.03 0 0 0 22 12.06Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.75 5h14.5A2.75 2.75 0 0 1 22 7.75v8.5A2.75 2.75 0 0 1 19.25 19H4.75A2.75 2.75 0 0 1 2 16.25v-8.5A2.75 2.75 0 0 1 4.75 5Zm0 1.75a.94.94 0 0 0-.28.04l7.06 5.42c.28.22.66.22.94 0l7.06-5.42a.94.94 0 0 0-.28-.04H4.75Zm15.5 1.78-6.71 5.16a2.52 2.52 0 0 1-3.08 0L3.75 8.53v7.72c0 .55.45 1 1 1h14.5c.55 0 1-.45 1-1V8.53Z" />
        </svg>
    );
}

function App() {
    return (
        <main className="page-shell">
            <nav className="navbar" aria-label="Navigație principală">
                <a className="brand" href="#top" aria-label="Inițiativa Urbanã">
                    <span>
                        <strong>Inițiativa Urbanã</strong>
                    </span>
                </a>
                <div className="nav-links">
                    <a href="#proiecte">Proiecte</a>
                    <a href="#implica-te">Implică-te</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero" id="top">
                <div className="hero-copy">
                    <p className="section-kicker">
                        Matei Basarab · Căuzași · Anton Pann
                    </p>
                    <h1>
                        Vecini care transformă cartierul în fiecare săptămână.
                    </h1>
                    <p className="hero-lead">
                        Punem laolaltă idei, sesizări și energie civică pentru
                        un cartier central mai curat, mai sigur și mai prietenos
                        cu oamenii care îl locuiesc.
                    </p>
                    <div
                        className="hero-actions"
                        aria-label="Acțiuni principale"
                    >
                        <a
                            className="button button-primary"
                            href="https://forms.gle/8UxvXdwvnsQsXcMG6"
                        >
                            Spune ce trebuie schimbat
                        </a>
                        <a
                            className="button button-secondary"
                            href="https://campaniamea.declic.ro/petitions/vrem-un-cartier-civilizat-in-zona-centrala-istorica-matei-basarab-cauzasi-anton-pann"
                        >
                            Susține petiția
                        </a>
                    </div>
                </div>

                <aside className="hero-card" aria-label="Rezumat comunitate">
                    <span className="pulse-dot" />
                    <p>Agenda comunității</p>
                    <h2>Curățenie, spațiu public și mobilitate mai bună.</h2>
                    <div className="mini-grid">
                        <span>3 zone</span>
                        <span>1 comunitate</span>
                        <span>Idei deschise</span>
                        <span>Acțiune locală</span>
                    </div>
                </aside>
            </section>

            <section className="intro-panel" aria-label="Despre inițiativă">
                <div>
                    <p className="section-kicker">Despre noi</p>
                    <h2>
                        O inițiativă de cartier construită din observații
                        concrete.
                    </h2>
                </div>
                <p>
                    Pornim de la problemele raportate de vecini și le organizăm
                    în pași clari: documentare, prioritizare, comunicare cu
                    autoritățile și urmărirea rezultatelor. Fiecare răspuns din
                    chestionar poate deveni următoarea acțiune.
                </p>
            </section>

            <section className="section" id="proiecte">
                <div className="section-heading">
                    <p className="section-kicker">Proiectele noastre</p>
                    <h2>
                        Trei direcții pentru un cartier care respiră mai bine.
                    </h2>
                </div>
                <div className="project-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <span>{project.eyebrow}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section action-section" id="implica-te">
                <div className="section-heading">
                    <p className="section-kicker">Implică-te</p>
                    <h2>Alege cel mai simplu mod de a ajuta chiar acum.</h2>
                </div>
                <div className="action-grid">
                    {actionLinks.map((link) => (
                        <article className="action-card" key={link.title}>
                            <h3>{link.title}</h3>
                            <p>{link.description}</p>
                            <a href={link.href}>{link.label}</a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="process">
                <p className="section-kicker">Cum lucrăm</p>
                <div className="process-steps">
                    <div>
                        <strong>01</strong>
                        <span>Colectăm sugestii</span>
                    </div>
                    <div>
                        <strong>02</strong>
                        <span>Le grupăm pe priorități</span>
                    </div>
                    <div>
                        <strong>03</strong>
                        <span>Le ducem mai departe împreună</span>
                    </div>
                </div>
            </section>

            <section className="contact-panel" id="contact">
                <div>
                    <p className="section-kicker">Contact</p>
                    <h2>Hai în conversație.</h2>
                    <p>
                        Comunitatea crește când informația circulă. Intră pe
                        canalele existente, propune o idee sau ajută la
                        documentarea unei probleme din cartier.
                    </p>
                </div>
                <div className="channel-list">
                    {communityChannels.map((channel) => (
                        <a href={channel.href} key={channel.title}>
                            <span className="channel-icon">
                                <ChannelIcon name={channel.icon} />
                            </span>
                            <span className="channel-copy">
                                <span>{channel.title}</span>
                                <strong>{channel.label}</strong>
                            </span>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;
