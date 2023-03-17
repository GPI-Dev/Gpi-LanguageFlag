import "./App.css";
import { LangCodesComplete } from "./Codes/LangCodesComplete";
import Flag from "./Functions/Flag";

function App() {
  const code = LangCodesComplete;

  return (
    <div class="gpi-wrapper">
      {code.map((x) => (
        <div class="gpi-card" key={x.l}>
          <div class="card-img">
            <Flag LangCode={x.l} />
          </div>
          <div class="card-details">
            {" "}
            <p class="card-text">{x.n}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
