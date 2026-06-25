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
            </div>
            {!snap && (
                <div className="map-panel-copy">
                    <p>{siteContent.map.intro}</p>
                </div>
            )}
            <MapEmbed interactive={!snap} />
            {!snap && (
                <div className="map-panel-copy">
                    {siteContent.map.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            )}
        </PanelTag>
    );
}
