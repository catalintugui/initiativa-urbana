import { TextPage } from "../components/ui/TextPage";
import { siteContent } from "../content/siteContent";

export function VolunteersPage() {
    return <TextPage fullWidthActions page={siteContent.volunteers} />;
}
