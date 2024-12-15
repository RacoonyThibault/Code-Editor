import { createSlice } from "@reduxjs/toolkit";

// Typage de l'état initial
interface PreviewState {
  preview: boolean;
}

const initialState: PreviewState = {
  preview: true,
};

// Création du slice avec TypeScript
export const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    togglePreview(state) {
      state.preview = !state.preview;
    },
    hidePreview: (state) => {
      state.preview = false;
    },
  },
});

// Export des actions et du reducer
export const { togglePreview, hidePreview } = previewSlice.actions;
export default previewSlice.reducer;
