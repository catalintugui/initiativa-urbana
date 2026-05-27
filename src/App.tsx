import { useEffect } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import content from "./content.json";
import treeLogoUrl from "./tree.svg";
import "./App.css";

type ChannelIconName = "whatsapp" | "facebook" | "email";

type SiteContent = typeof content & {
    contact: {
        channels: Array<{
            title: string;
            href: string;
            label: string;
            icon: ChannelIconName;
        }>;
    };
};

const siteContent = content as SiteContent;

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
        <nav className="navbar" aria-label={siteContent.navigation.ariaLabel}>
            <Link
                className="brand"
                to="/"
                aria-label={siteContent.navigation.brandAriaLabel}
            >
                <span className="brand-mark">
                    <img src={treeLogoUrl} alt="" aria-hidden="true" />
                </span>
                <span>
                    {siteContent.site.name}
                    <strong>{siteContent.site.area}</strong>
                </span>
            </Link>
            <div className="nav-links">
                {siteContent.navigation.items.map((item) => (
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
                        {siteContent.home.kicker}
                    </p>
                    <h1>{siteContent.home.title}</h1>
                    <p className="hero-lead">{siteContent.home.lead}</p>
                    <div
                        className="hero-actions"
                        aria-label={siteContent.home.actionsAriaLabel}
                    >
                        <Link
                            className="button button-primary"
                            to={siteContent.home.primaryAction.to}
                        >
                            {siteContent.home.primaryAction.label}
                        </Link>
                        <a
                            className="button button-secondary"
                            href={siteContent.home.secondaryAction.href}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {siteContent.home.secondaryAction.label}
                        </a>
                    </div>
                </div>

                <aside
                    className="hero-map-card"
                    aria-label={siteContent.home.map.ariaLabel}
                >
                    <div className="hero-map-heading">
                        <p>{siteContent.home.map.kicker}</p>
                    </div>
                    <MapEmbed />
                    <a
                        className="map-link"
                        href={siteContent.map.externalUrl}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {siteContent.map.openLabel}
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
            aria-label={siteContent.about.ariaLabel}
        >
            <div>
                <p className="section-kicker">{siteContent.about.kicker}</p>
                <h2>{siteContent.about.title}</h2>
            </div>
            <p>{siteContent.about.body}</p>
        </section>
    );
}

function ProjectsPage() {
    return (
        <section className="section page-section">
            <div className="section-heading">
                <p className="section-kicker">{siteContent.projects.kicker}</p>
                <h2>{siteContent.projects.title}</h2>
            </div>
            <div className="project-grid">
                {siteContent.projects.items.map((project) => (
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
                <p className="section-kicker">
                    {siteContent.involvement.kicker}
                </p>
                <h2>{siteContent.involvement.title}</h2>
            </div>
            <div className="action-grid">
                {siteContent.involvement.actions.map((link) => (
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

function ContactPage() {
    return (
        <section className="contact-panel page-panel">
            <div>
                <p className="section-kicker">{siteContent.contact.kicker}</p>
                <h2>{siteContent.contact.title}</h2>
                <p>{siteContent.contact.body}</p>
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
                src={siteContent.map.embedUrl}
                title={siteContent.map.iframeTitle}
            />
        </div>
    );
}

function MapSection({ compact = false }: { compact?: boolean }) {
    return (
        <section className={compact ? "map-panel" : "map-panel page-panel"}>
            <div className="section-heading">
                <p className="section-kicker">{siteContent.map.kicker}</p>
                <h2>{siteContent.map.title}</h2>
                <p>{siteContent.map.description}</p>
            </div>
            <MapEmbed />
            <a
                className="map-link"
                href={siteContent.map.externalUrl}
                rel="noreferrer"
                target="_blank"
            >
                {siteContent.map.openLabel}
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
            {siteContent.contact.channels.map((channel) => (
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
                    {siteContent.site.fullName}
                </Link>
                <p>
                    © {year} {siteContent.site.fullName}.{" "}
                    {siteContent.footer.rights}
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
                <p className="section-kicker">{siteContent.notFound.kicker}</p>
                <h2>{siteContent.notFound.title}</h2>
            </div>
            <p>{siteContent.notFound.body}</p>
        </section>
    );
}

function App() {
    useEffect(() => {
        document.title = siteContent.site.fullName;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", siteContent.site.description);
    }, []);

    return (
        <main className="page-shell">
            <Navbar />
            <div className="app-content">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<AboutPage />} path="/despre" />
                    <Route element={<ProjectsPage />} path="/proiecte" />
                    <Route element={<GetInvolvedPage />} path="/implica-te" />
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
