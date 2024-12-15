import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Assurez-vous que le type RootState est correctement défini dans votre projet

export default function Preview() {
  // Typage des données récupérées depuis le store
  const tabs = useSelector((state: RootState) => state.tabs);

  // Typage de la fonction getCode
  function getCode(lang: string): string {
    const tab = tabs.find((tab) => tab.lang === lang);
    return tab?.code || ""; // Assure que la fonction retourne une chaîne vide si aucun tab n'est trouvé
  }

  const srcDoc = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${getCode("css")}</style>
    </head>
    <body>
      ${getCode("html")}
      <script>${getCode("js")}</script>
    </body>
    </html>
  `;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
      <iframe
        className="block w-full h-full"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
      ></iframe>
    </div>
  );
}
