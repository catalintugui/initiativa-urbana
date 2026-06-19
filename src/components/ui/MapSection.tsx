import { siteContent } from "../../content/siteContent";
import { MapEmbed } from "./MapEmbed";

type MapSectionProps = {
    compact?: boolean;
    snap?: boolean;
};

export function MapSection({ compact = false, snap = false }: MapSectionProps) {
    const PanelTag = snap ? "div" : "section";

    return (
        <PanelTag
            className={[
                "map-panel",
                compact || snap ? "snap-panel" : "page-panel",
                snap ? "map-panel--snap" : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className="map-panel-heading">
                <p className="section-kicker">{siteContent.map.kicker}</p>
                <h2>{siteContent.map.title}</h2>
                {!snap && <p>{siteContent.map.description}</p>}
            </div>
            <MapEmbed interactive={!snap} />
            <a
                className="map-link"
                href={siteContent.map.externalUrl}
                rel="noreferrer"
                target="_blank"
            >
                {siteContent.map.openLabel}
            </a>
        </PanelTag>
    );
}
