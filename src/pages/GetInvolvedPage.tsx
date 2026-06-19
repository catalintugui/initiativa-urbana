import { siteContent } from "../content/siteContent";

type GetInvolvedPageProps = {
    compact?: boolean;
};

export function GetInvolvedPage({ compact = false }: GetInvolvedPageProps) {
    const PanelTag = compact ? "div" : "section";

    return (
        <PanelTag
            className={
                compact ? "section action-section snap-panel" : "section action-section page-section"
            }
        >
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
        </PanelTag>
    );
}
