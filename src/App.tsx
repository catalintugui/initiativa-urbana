import { Link, NavLink, Route, Routes } from "react-router-dom";
import treeLogoUrl from "./tree.svg";
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

const navItems = [
    { to: "/", label: "Acasă" },
    { to: "/despre", label: "Despre" },
    { to: "/proiecte", label: "Proiecte" },
    { to: "/implica-te", label: "Implică-te" },
    { to: "/cum-lucram", label: "Cum lucrăm" },
    { to: "/contact", label: "Contact" },
];

const jewishQuarterMapEmbedUrl =
    "https://maps.google.com/maps?ll=44.4313,26.1146&z=16&output=embed";

const jewishQuarterMapUrl =
    "https://www.google.com/maps/search/?api=1&query=44.4313,26.1146";

type ChannelIconName = "whatsapp" | "facebook" | "email";

function ChannelIcon({ name }: { name: ChannelIconName }) {
    if (name === "whatsapp") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.2a8.67 8.67 0 0 0-7.43 13.15l-.88 3.95 4.03-.86A8.67 8.67 0 1 0 12 3.2Zm0 1.7a6.97 6.97 0 1 1-3.63 12.92l-.3-.18-2.08.45.46-2.03-.2-.32A6.97 6.97 0 0 1 12 4.9Zm-2.48 3.5c-.14 0-.36.05-.55.26-.19.21-.72.7-.72 1.72 0 1.01.74 1.99.84 2.13.1.14 1.44 2.29 3.55 3.12 1.75.69 2.11.55 2.49.52.38-.04 1.24-.51 1.41-.99.18-.49.18-.91.13-.99-.05-.09-.19-.14-.4-.25-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.11-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.04-.62-.55-1.04-1.24-1.16-1.45-.12-.21-.01-.32.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.41-.34-.35-.47-.36h-.38Z" />
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

function Navbar() {
    return (
        <nav className="navbar" aria-label="Navigație principală">
            <Link className="brand" to="/" aria-label="Inițiativa Urbană">
                <span className="brand-mark">
                    <img src={treeLogoUrl} alt="" aria-hidden="true" />
                </span>
                <span>
                    Inițiativa Urbană
                    <strong>Căuzași</strong>
                </span>
            </Link>
            <div className="nav-links">
                {navItems.map((item) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                        end={item.to === "/"}
                        key={item.to}
                        to={item.to}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

function HomePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-copy">
                    <p className="section-kicker">
                        Matei Basarab · Căuzași · Anton Pann
                    </p>
                    <h1>
                        Vecini care transformă cartierul în fiecare săptămână.
                    </h1>
                    <p className="hero-lead">
                        Adunãm idei, sesizări și energie civică pentru un
                        cartier central mai curat, mai sigur și mai prietenos cu
                        oamenii care îl locuiesc.
                    </p>
                    <div
                        className="hero-actions"
                        aria-label="Acțiuni principale"
                    >
                        <Link
                            className="button button-primary"
                            to="/implica-te"
                        >
                            Spune ce trebuie schimbat
                        </Link>
                        <a
                            className="button button-secondary"
                            href="https://campaniamea.declic.ro/petitions/vrem-un-cartier-civilizat-in-zona-centrala-istorica-matei-basarab-cauzasi-anton-pann"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Susține petiția
                        </a>
                    </div>
                </div>

                <aside
                    className="hero-map-card"
                    aria-label="Hartă Strada Romulus"
                >
                    <div className="hero-map-heading">
                        <p>Hartă comunitate</p>
                    </div>
                    <MapEmbed />
                    <a
                        className="map-link"
                        href={jewishQuarterMapUrl}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Deschide în Google Maps
                    </a>
                </aside>
            </section>
            <AboutPage compact />
        </>
    );
}

function AboutPage({ compact = false }: { compact?: boolean }) {
    return (
        <section
            className={compact ? "intro-panel" : "intro-panel page-panel"}
            aria-label="Despre inițiativă"
        >
            <div>
                <p className="section-kicker">Despre noi</p>
                <h2>
                    O inițiativă de cartier construită din observații concrete.
                </h2>
            </div>
            <p>
                Pornim de la problemele raportate de vecini și le organizăm în
                pași clari: documentare, prioritizare, comunicare cu
                autoritățile și urmărirea rezultatelor. Fiecare răspuns din
                chestionar poate deveni următoarea acțiune.
            </p>
        </section>
    );
}

function ProjectsPage() {
    return (
        <section className="section page-section">
            <div className="section-heading">
                <p className="section-kicker">Proiectele noastre</p>
                <h2>Trei direcții pentru un cartier care respiră mai bine.</h2>
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
    );
}

function GetInvolvedPage() {
    return (
        <section className="section action-section page-section">
            <div className="section-heading">
                <p className="section-kicker">Implică-te</p>
                <h2>Alege cel mai simplu mod de a ajuta chiar acum.</h2>
            </div>
            <div className="action-grid">
                {actionLinks.map((link) => (
                    <article className="action-card" key={link.title}>
                        <h3>{link.title}</h3>
                        <p>{link.description}</p>
                        <a href={link.href} rel="noreferrer" target="_blank">
                            {link.label}
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

function ProcessPage() {
    return (
        <section className="process page-section">
            <p className="section-kicker">Cum lucrăm</p>
            <h2>Transformăm conversațiile în pași urmăribili.</h2>
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
    );
}

function ContactPage() {
    return (
        <section className="contact-panel page-panel">
            <div>
                <p className="section-kicker">Contact</p>
                <h2>Hai în conversație.</h2>
                <p>
                    Comunitatea crește când informația circulă. Intră pe
                    canalele existente, propune o idee sau ajută la documentarea
                    unei probleme din cartier.
                </p>
            </div>
            <SocialLinks variant="cards" />
        </section>
    );
}

function MapEmbed() {
    return (
        <div className="map-frame">
            <iframe
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={jewishQuarterMapEmbedUrl}
                title="Hartă Cartierul Evreiesc București"
            />
        </div>
    );
}

function MapSection({ compact = false }: { compact?: boolean }) {
    return (
        <section className={compact ? "map-panel" : "map-panel page-panel"}>
            <div className="section-heading">
                <p className="section-kicker">Hartă</p>
                <h2>Cartierul Evreiesc, București</h2>
                <p>
                    Hartă centrată pe Strada Romulus, în zona istorică a
                    Cartierului Evreiesc, aproape de Matei Basarab, Căuzași și
                    Anton Pann.
                </p>
            </div>
            <MapEmbed />
            <a
                className="map-link"
                href={jewishQuarterMapUrl}
                rel="noreferrer"
                target="_blank"
            >
                Deschide în Google Maps
            </a>
        </section>
    );
}

function MapPage() {
    return <MapSection />;
}

function SocialLinks({ variant = "cards" }: { variant?: "cards" | "footer" }) {
    return (
        <div className={variant === "cards" ? "channel-list" : "footer-social"}>
            {communityChannels.map((channel) => (
                <a
                    href={channel.href}
                    key={channel.title}
                    rel="noreferrer"
                    target="_blank"
                >
                    <span className="channel-icon">
                        <ChannelIcon name={channel.icon as ChannelIconName} />
                    </span>
                    <span className="channel-copy">
                        <span>{channel.title}</span>
                        {variant === "cards" && (
                            <strong>{channel.label}</strong>
                        )}
                    </span>
                </a>
            ))}
        </div>
    );
}

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div>
                <Link className="footer-brand" to="/">
                    Inițiativa Urbană Căuzași
                </Link>
                <p>
                    © {year} Inițiativa Urbană Căuzași. Toate drepturile
                    rezervate.
                </p>
            </div>
            <SocialLinks variant="footer" />
        </footer>
    );
}

function NotFoundPage() {
    return (
        <section className="intro-panel page-panel">
            <div>
                <p className="section-kicker">404</p>
                <h2>Pagina nu a fost găsită.</h2>
            </div>
            <p>
                Adresa nu există încă. Întoarce-te la pagina principală sau
                folosește navigația pentru a ajunge la secțiunea dorită.
            </p>
        </section>
    );
}

function App() {
    return (
        <main className="page-shell">
            <Navbar />
            <div className="app-content">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutPage />} path="/despre" />
                    <Route element={<ProjectsPage />} path="/proiecte" />
                    <Route element={<GetInvolvedPage />} path="/implica-te" />
                    <Route element={<ProcessPage />} path="/cum-lucram" />
                    <Route element={<MapPage />} path="/harta" />
                    <Route element={<ContactPage />} path="/contact" />
                    <Route element={<NotFoundPage />} path="*" />
                </Routes>
            </div>
            <Footer />
        </main>
    );
}

export default App;
