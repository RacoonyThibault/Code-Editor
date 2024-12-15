import { useDispatch } from "react-redux";
import { updateCode } from "../../features/tabs";
import { ChangeEvent } from "react";

// Typage des props du composant
interface CodeTabProps {
  code: string;
  id: number;
}

export default function CodeTab({ code, id }: CodeTabProps) {
  const dispatch = useDispatch();

  // Typage de l'événement du textarea
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCode({ id, value: e.target.value }));
  };

  return (
    <textarea
      onChange={handleChange}
      value={code}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none"
    ></textarea>
  );
}
