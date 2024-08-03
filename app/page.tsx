import Image from "next/image";
import HomePropriete from "./pages/HomePropriete/page";
import Welcome from "./pages/Home/page";
import Cards from "./layouts/creationDesDocuments/Cards";
import CreateDocs from "./pages/createDocuments/page";
import CreateSarl from "./pages/creationSarl/page";
import CreatingSarl from "./pages/createSarl/page";
import ContactTeams from "./pages/contactTeams/page";
import DocTranslates from "./pages/DocumentTranslate/page";
import CreatePersonal from "./pages/INdivEnterprise/page";

export default function Home() {
  return (
    <div>
      <CreatePersonal />
    </div>
  );
}
