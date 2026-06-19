import type { ReactNode } from "react";

type SnapSectionProps = {
    id: string;
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
    innerClassName?: string;
};

export function SnapSection({
    id,
    children,
    className,
    ariaLabel,
    innerClassName,
}: SnapSectionProps) {
    return (
        <section
            id={id}
            className={["snap-section", className].filter(Boolean).join(" ")}
            aria-label={ariaLabel}
        >
            <div
                className={["snap-section-inner", innerClassName]
                    .filter(Boolean)
                    .join(" ")}
            >
                {children}
            </div>
        </section>
    );
}
