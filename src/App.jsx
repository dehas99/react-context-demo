import "./App.css";
import { createContext, useContext, useState } from "react";

const SnusContext = createContext(null);

function App() {
  const [antal, setAntal] = useState(4);
  return (
    <SnusContext.Provider
      value={{ SnusHemma: "general", antal: antal, setAntal: setAntal }}
    >
      <div className="App">
        Hej
        <SnusDosa />
      </div>
    </SnusContext.Provider>
  );
}
function SnusDosa() {
  const snus = useContext(SnusContext);
  console.log(snus);
  return (
    <div>
      jag har {snus.SnusHemma} hemma och har {snus.antal} stycken
      <button
        onClick={() => {
          snus.setAntal(snus.antal + 1);
        }}
      >
        öka antal
      </button>
    </div>
  );
}
export default App;
