import { SponsorMarquee } from "../components/ui/SponsorMarquee";
import { TextPage } from "../components/ui/TextPage";
import { siteContent } from "../content/siteContent";

export function SponsorsPage() {
    return (
        <>
            <SponsorMarquee />
            <TextPage fullWidthActions page={siteContent.sponsors} />
        </>
    );
}
