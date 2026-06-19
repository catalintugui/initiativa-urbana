import { useEffect, useRef, useState } from "react";
import { sectionIds, type SectionId } from "../sectionIds";

const FORWARD_THRESHOLD = 0.38;
const BACKWARD_THRESHOLD = 0.12;

function getActiveSectionFromScroll(
    scrollRoot: HTMLElement,
    currentId: SectionId,
): SectionId {
    const { scrollTop, clientHeight } = scrollRoot;

    if (clientHeight <= 0) {
        return sectionIds[0];
    }

    const ratio = scrollTop / clientHeight;
    const currentIndex = sectionIds.indexOf(currentId);

    if (currentIndex < 0) {
        return sectionIds[
            Math.min(
                sectionIds.length - 1,
                Math.max(0, Math.round(ratio)),
            )
        ];
    }

    if (
        currentIndex < sectionIds.length - 1 &&
        ratio > currentIndex + FORWARD_THRESHOLD
    ) {
        return sectionIds[currentIndex + 1];
    }

    if (currentIndex > 0 && ratio < currentIndex - BACKWARD_THRESHOLD) {
        return sectionIds[currentIndex - 1];
    }

    return currentId;
}

export function useActiveSection(scrollRootSelector = ".snap-scroll-container") {
    const [activeId, setActiveId] = useState<SectionId>(sectionIds[0]);
    const pendingSectionRef = useRef<SectionId | null>(null);

    useEffect(() => {
        const scrollRoot = document.querySelector<HTMLElement>(scrollRootSelector);

        if (!scrollRoot) {
            return;
        }

        const updateActiveSection = () => {
            if (pendingSectionRef.current) {
                return;
            }

            setActiveId((current) => {
                const nextId = getActiveSectionFromScroll(scrollRoot, current);
                return nextId === current ? current : nextId;
            });
        };

        const releasePendingNavigation = () => {
            if (!pendingSectionRef.current) {
                return;
            }

            pendingSectionRef.current = null;
            updateActiveSection();
        };

        const onSectionNavigate = (event: Event) => {
            const { sectionId, lockUntilScrollEnd } = (
                event as CustomEvent<{
                    sectionId: SectionId;
                    lockUntilScrollEnd?: boolean;
                }>
            ).detail;

            if (!sectionIds.includes(sectionId)) {
                return;
            }

            setActiveId(sectionId);

            if (lockUntilScrollEnd) {
                pendingSectionRef.current = sectionId;
            } else {
                pendingSectionRef.current = null;
            }
        };

        updateActiveSection();

        scrollRoot.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });
        scrollRoot.addEventListener("scrollend", releasePendingNavigation);
        window.addEventListener("resize", updateActiveSection);
        window.addEventListener("sectionnavigate", onSectionNavigate);

        return () => {
            scrollRoot.removeEventListener("scroll", updateActiveSection);
            scrollRoot.removeEventListener("scrollend", releasePendingNavigation);
            window.removeEventListener("resize", updateActiveSection);
            window.removeEventListener("sectionnavigate", onSectionNavigate);
        };
    }, [scrollRootSelector]);

    return activeId;
}
