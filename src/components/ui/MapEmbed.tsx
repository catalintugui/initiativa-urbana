import { siteContent } from "../../content/siteContent";

type MapEmbedProps = {
    interactive?: boolean;
};

export function MapEmbed({ interactive = true }: MapEmbedProps) {
    return (
        <div
            className={["map-frame", interactive ? "" : "map-frame--static"]
                .filter(Boolean)
                .join(" ")}
        >
            <iframe
                allowFullScreen={interactive}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={siteContent.map.embedUrl}
                tabIndex={interactive ? undefined : -1}
                title={siteContent.map.iframeTitle}
            />
            {!interactive && (
                <a
                    className="map-frame-hitarea"
                    href={siteContent.map.externalUrl}
                    rel="noreferrer"
                    target="_blank"
                    aria-label={siteContent.map.openLabel}
                />
            )}
        </div>
    );
}
