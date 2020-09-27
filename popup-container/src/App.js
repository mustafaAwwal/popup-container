import React, { useState } from "react";
import { PopupContainer, SmallContent, LargeContent } from "./components";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("small");
  return (
    <div className="App">
      <button type="button" onClick={() => setOpen(!open)}>
        Toggle Container
      </button>
      <button type="button" onClick={() => setContent("small")}>
        Small Content
      </button>
      <button type="button" onClick={() => setContent("large")}>
        LargeContent
      </button>

      <PopupContainer open={open} setClose={() => setOpen(false)}>
        {content === "small" && <SmallContent />}
        {content === "large" && <LargeContent />}
      </PopupContainer>
    </div>
  );
}

export default App;
