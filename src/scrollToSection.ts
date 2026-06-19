import { sectionIds, type SectionId } from "./sectionIds";

type SectionNavigateDetail = {
    sectionId: SectionId;
    lockUntilScrollEnd?: boolean;
};

export function scrollToSection(
    sectionId: string,
    behavior: ScrollBehavior = "smooth",
) {
    const section = document.getElementById(sectionId);

    if (!section) {
        return;
    }

    if (!isValidSectionId(sectionId)) {
        return;
    }

    const scrollRoot = document.querySelector<HTMLElement>(
        ".snap-scroll-container",
    );
    const targetIndex = sectionIds.indexOf(sectionId);
    const currentIndex =
        scrollRoot && scrollRoot.clientHeight > 0
            ? Math.round(scrollRoot.scrollTop / scrollRoot.clientHeight)
            : targetIndex;
    const needsScroll = currentIndex !== targetIndex;

    section.scrollIntoView({ behavior, block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
    window.dispatchEvent(
        new CustomEvent<SectionNavigateDetail>("sectionnavigate", {
            detail: {
                sectionId,
                lockUntilScrollEnd: needsScroll && behavior === "smooth",
            },
        }),
    );
}

export function isValidSectionId(id: string): id is SectionId {
    return sectionIds.includes(id as SectionId);
}
