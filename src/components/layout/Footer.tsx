import type { MouseEvent } from "react";
import { siteContent } from "../../content/siteContent";
import { scrollToSection } from "../../scrollToSection";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
    const year = new Date().getFullYear();

    const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        scrollToSection("cauzasi-2030");
    };

    return (
        <footer className="site-footer">
            <div className="footer-brand-row">
                <a
                    className="footer-brand"
                    href="#cauzasi-2030"
                    onClick={scrollToTop}
                >
                    <img
                        className="footer-brand-mark"
                        src="/brand/logo-mark.png"
                        alt=""
                        aria-hidden="true"
                    />
                    {siteContent.site.fullName}
                </a>
                <p>
                    © {year} {siteContent.footer.copyrightHolder}.{" "}
                    {siteContent.footer.rights}
                </p>
            </div>
            <SocialLinks variant="footer" />
        </footer>
    );
}
