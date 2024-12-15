import { useDispatch } from "react-redux";
import { hidePreview } from "../../features/preview";

// Typage des props du composant
interface ButtonTabProps {
  id: number;
  toggleTab: (id: number) => void;
  buttonContent: string;
  imgURL: string;
}

export default function ButtonTab({
  id,
  toggleTab,
  buttonContent,
  imgURL,
}: ButtonTabProps) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        toggleTab(id);
        dispatch(hidePreview());
      }}
      className="flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    >
      <img src={imgURL} className="w-5" alt={`${buttonContent} icon`} />
      <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
    </button>
  );
}
