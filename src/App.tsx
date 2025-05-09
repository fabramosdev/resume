import { Header } from "./components/Header";
import { About } from "./components/About";
import { Stacks } from "./components/Stacks";
import { Expertise } from "./components/Expertise";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <About />
      <Stacks />
      <Expertise />
    </div>
  );
}

export default App;
