import CodeTab from "../CodeTab";
import ButtonTab from "../ButtonTab";
import { useSelector } from "react-redux";
import { useState } from "react";
import Preview from "../Preview";
import { RootState } from "../../store"; // Typage global du store Redux

// Typage pour une entrée de tab
interface Tab {
  id: number;
  imgURL?: string;
  buttonContent: string;
  code: string;
}

export default function Tabs() {
  // Typage de la récupération des tabs et du previewData
  const tabs = useSelector((state: RootState) => state.tabs as Tab[]);
  const previewData = useSelector((state: RootState) => state.preview);

  // Typage pour l'état local
  const [tabIndex, setTabIndex] = useState<number>(tabs[0]?.id || 0);

  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map((tab) => (
          <ButtonTab
            key={tab.id}
            id={tab.id}
            toggleTab={(id) => setTabIndex(id)}
            imgURL={tab.imgURL || ""}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="w-full grow relative">
        <CodeTab
          id={tabIndex}
          code={tabs.find((obj) => obj.id === tabIndex)?.code || ""}
        />
        {previewData.preview && <Preview />}
      </div>
    </div>
  );
}
