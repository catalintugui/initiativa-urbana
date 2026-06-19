import { useEffect } from "react";
import { SnapSection } from "../components/ui/SnapSection";
import { VisionSlider } from "../components/ui/VisionSlider";
import { MapSection } from "../components/ui/MapSection";
import { TextPage } from "../components/ui/TextPage";
import { siteContent } from "../content/siteContent";
import { ContactPage } from "./ContactPage";
import { GetInvolvedPage } from "./GetInvolvedPage";
import { TeamPage } from "./TeamPage";
import { isValidSectionId, scrollToSection } from "../scrollToSection";

export function HomePage() {
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");

        if (!hash || !isValidSectionId(hash)) {
            return;
        }

        scrollToSection(hash, "auto");
    }, []);

    return (
        <>
            <SnapSection
                ariaLabel={siteContent.home.title}
                className="snap-section--hero"
                id="cauzasi-2030"
            >
                <div className="story-copy story-copy--solo">
                    <p className="section-kicker">{siteContent.home.kicker}</p>
                    <h1>{siteContent.home.title}</h1>
                    <div className="hero-split">
                        <div className="hero-split-copy">
                            {siteContent.home.intro.slice(0, 2).map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <VisionSlider />
                    </div>
                    <div className="hero-intro">
                        {siteContent.home.intro.slice(2).map((paragraph, index) => (
                            <p key={index + 2}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#petitii">
                            {siteContent.home.primaryAction.label}
                        </a>
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
            </SnapSection>

            <SnapSection
                ariaLabel={siteContent.map.kicker}
                className="snap-section--map"
                id="harta"
            >
                <MapSection snap />
            </SnapSection>

            <SnapSection
                ariaLabel={siteContent.volunteers.kicker}
                id="voluntari"
            >
                <TextPage compact page={siteContent.volunteers} />
            </SnapSection>

            <SnapSection
                ariaLabel={siteContent.involvement.kicker}
                id="petitii"
            >
                <GetInvolvedPage compact />
            </SnapSection>

            <SnapSection
                ariaLabel={siteContent.sponsors.kicker}
                id="sponsori"
            >
                <TextPage compact page={siteContent.sponsors} />
            </SnapSection>

            <SnapSection ariaLabel={siteContent.team.kicker} id="echipa">
                <TeamPage compact />
            </SnapSection>

            <SnapSection
                ariaLabel={siteContent.contact.kicker}
                id="contact"
            >
                <ContactPage compact />
            </SnapSection>
        </>
    );
}
