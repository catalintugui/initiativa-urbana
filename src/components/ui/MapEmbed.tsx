import { useEffect, useRef } from "react";
import { siteContent } from "../../content/siteContent";

type MapEmbedProps = {
    interactive?: boolean;
};

export function MapEmbed({ interactive = true }: MapEmbedProps) {
    const shieldRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shield = shieldRef.current;
        if (!shield || !interactive) {
            return;
        }

        const blockWheel = (event: WheelEvent) => {
            event.preventDefault();
            event.stopPropagation();
        };

        const passThrough = () => {
            shield.style.pointerEvents = "none";
        };

        const restoreShield = () => {
            shield.style.pointerEvents = "auto";
        };

        shield.addEventListener("wheel", blockWheel, { passive: false });
        shield.addEventListener("mousedown", passThrough);
        shield.addEventListener("touchstart", passThrough, { passive: true });
        document.addEventListener("mouseup", restoreShield);
        document.addEventListener("touchend", restoreShield);
        document.addEventListener("touchcancel", restoreShield);

        return () => {
            shield.removeEventListener("wheel", blockWheel);
            shield.removeEventListener("mousedown", passThrough);
            shield.removeEventListener("touchstart", passThrough);
            document.removeEventListener("mouseup", restoreShield);
            document.removeEventListener("touchend", restoreShield);
            document.removeEventListener("touchcancel", restoreShield);
        };
    }, [interactive]);

    return (
        <div
            className={[
                "map-frame",
                interactive ? "map-frame--interactive" : "map-frame--static",
            ]
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
            {interactive && (
                <div
                    ref={shieldRef}
                    aria-hidden="true"
                    className="map-frame-wheel-shield"
                />
            )}
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
