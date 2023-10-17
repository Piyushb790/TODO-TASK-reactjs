import { createRoot } from "react-dom/client";
import Todo from "./src/components/Todo";

const AppLayout = () => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
