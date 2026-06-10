import { BrowserRouter } from "react-router-dom";
import "@/styles/global.css";
import { Menu } from "@/components/sidebar";

function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
