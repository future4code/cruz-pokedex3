import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalState from './global/GlobalState'

export default function App() {
  return (
    <div>
      <GlobalState>
        <BrowserRouter> 
          <Router/>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}