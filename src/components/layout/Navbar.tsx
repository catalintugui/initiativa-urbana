import { useEffect, useState } from "react";
import {
    siteContent,
    type NavigationItem,
} from "../../content/siteContent";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection } from "../../scrollToSection";

function getSectionId(href: string) {
    return href.replace(/^#/, "");
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeId = useActiveSection();
    const navItems = siteContent.navigation.items.filter(
        (item): item is NavigationItem & { to: string } => Boolean(item.to),
    );

    useEffect(() => {
        setIsMenuOpen(false);
    }, [activeId]);

    const handleNavClick = (href: string) => {
        scrollToSection(getSectionId(href));
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar" aria-label={siteContent.navigation.ariaLabel}>
            <a
                className="brand"
                href="#cauzasi-2030"
                aria-label={siteContent.navigation.brandAriaLabel}
                onClick={(event) => {
                    event.preventDefault();
                    handleNavClick("#cauzasi-2030");
                }}
            >
                <span className="brand-mark">
                    <img
                        src="/brand/logo-mark.png"
                        alt=""
                        aria-hidden="true"
                    />
                </span>
                <span className="brand-text">
                    <span className="brand-title">
                        {siteContent.site.name} {siteContent.site.area}
                    </span>
                    <span className="brand-tagline">
                            {siteContent.site.tagline}
                        </span>
                </span>
            </a>
            <button
                className="nav-toggle"
                type="button"
                aria-controls="primary-navigation"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
                onClick={() => setIsMenuOpen((current) => !current)}
            >
                <span />
                <span />
                <span />
            </button>
            <div
                className={["nav-links", isMenuOpen ? "open" : ""]
                    .filter(Boolean)
                    .join(" ")}
                id="primary-navigation"
            >
                {navItems.map((item) => {
                    if (!item.to) {
                        return null;
                    }

                    const sectionId = getSectionId(item.to);
                    const isActive = activeId === sectionId;

                    return (
                        <a
                            className={isActive ? "active" : undefined}
                            href={item.to}
                            key={item.to}
                            onClick={(event) => {
                                event.preventDefault();
                                handleNavClick(item.to);
                            }}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
