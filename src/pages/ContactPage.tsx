import { SocialLinks } from "../components/ui/SocialLinks";
import { siteContent } from "../content/siteContent";

type ContactPageProps = {
    compact?: boolean;
};

export function ContactPage({ compact = false }: ContactPageProps) {
    const paragraphs = compact
        ? siteContent.contact.body.slice(0, 2)
        : siteContent.contact.body;
    const PanelTag = compact ? "div" : "section";

    return (
        <PanelTag
            className={
                compact ? "contact-panel snap-panel" : "contact-panel page-panel"
            }
        >
            <div>
                <p className="section-kicker">{siteContent.contact.kicker}</p>
                <h2>{siteContent.contact.title}</h2>
                <div className="contact-copy">
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
            <SocialLinks variant="cards" />
        </PanelTag>
    );
}
