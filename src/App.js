import "./App.css";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bollywood from "./Bollywood";
import Cricket from "./Cricket";
import LiftState from "./LiftState";
import Todo from "./Todo";
import Menubar from "./common/Menubar";
import Header from "./common/Header";
import Footer from "./common/Footer";
import FormFn from "./FormFn";
import Test from "./Test";
import WordCount from "./WordCount";
import Misc from "./Misc";
import HookLayoutEffect from "./hooks/HookLayoutEffect";
import HookParams from "./hooks/HookParams";
import HookMemo from "./hooks/HookMemo";
import FormValidation from "./FormValidation";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Menubar />
          <div className="row bg-light bg-opacity-75">
            <div className="col-12">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cricket" element={<Cricket />} />
                <Route path="/bollywood" element={<Bollywood />} />
                <Route path="/liftstateup" element={<LiftState />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/form" element={<FormFn />} />
                <Route path="/test" element={<Test />} />
                <Route path="/wordcount" element={<WordCount />} />
                <Route path="/misc" element={<Misc />} />
                <Route
                  path="/hookLayouteffect"
                  element={<HookLayoutEffect />}
                />
                <Route path="/hookparams/:id" element={<HookParams />} />
                <Route path="/hookmemo" element={<HookMemo />} />
                <Route path="/formvalidation" element={<FormValidation />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
