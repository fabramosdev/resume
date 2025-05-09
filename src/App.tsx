import { Header } from "./components/Header";
import { About } from "./components/About";
import { Stacks } from "./components/Stacks";
//import { Expertise } from "./components/Expertise";
import { Jobs } from "./components/Jobs";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Header />
      <About />
      <Stacks />
      <Jobs />
    </div>
  );
}

export default App;
