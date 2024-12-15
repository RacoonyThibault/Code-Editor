import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { html, css, js } from "../assets/index";

// Définir le type pour un élément de l'état
interface CodeItem {
  id: number;
  lang: string;
  imgURL: string;
  buttonContent: string;
  code: string;
}

// Typage de l'état initial (tableau de CodeItem)
const initialState: CodeItem[] = [
  {
    id: 1,
    lang: "html",
    imgURL: html,
    buttonContent: "HTML",
    code: `<div>
      <h1>Editeur de code React</h1>
      <p>Un éditeur de code simple et minimaliste</p>
    </div>`,
  },
  {
    id: 2,
    lang: "css",
    imgURL: css,
    buttonContent: "CSS",
    code: `body {
      font-family: Roboto, sans-serif;
      padding: 25px;
      color: #111;
      background-color: #f1f1f1;
    }`,
  },
  {
    id: 3,
    lang: "js",
    imgURL: js,
    buttonContent: "JavaScript",
    code: `console.log("Hello World!");`,
  },
];

// Typage de la payload pour l'action updateCode
interface UpdateCodePayload {
  id: number;
  value: string;
}

// Création du slice avec TypeScript
export const codeUpdater = createSlice({
  name: "codeUpdater",
  initialState,
  reducers: {
    updateCode(state, action: PayloadAction<UpdateCodePayload>) {
      const item = state.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.code = action.payload.value;
      }
    },
  },
});

// Export des actions et du reducer
export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
