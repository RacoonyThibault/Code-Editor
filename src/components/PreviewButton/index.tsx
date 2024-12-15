import showView from "../../assets/view.svg";
import hideView from "../../assets/hide.svg";
import { useSelector, useDispatch } from "react-redux";
import { togglePreview } from "../../features/preview";
import { RootState } from "../../store"; // Assurez-vous que le type RootState est défini dans votre projet

export default function PreviewButton() {
  // Typage de l'état global avec RootState
  const previewData = useSelector((state: RootState) => state.preview);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(togglePreview())}
      className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-left text-slate-50"
    >
      <img
        className="w-5 mr-3"
        src={previewData.preview ? hideView : showView}
        alt={previewData.preview ? "Hide preview icon" : "Show preview icon"}
      />
      <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
    </button>
  );
}
