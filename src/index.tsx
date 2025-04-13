import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LpDraSandra } from "./screens/LpDraSandra";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LpDraSandra />
  </StrictMode>,
);
