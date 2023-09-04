import "./App.css";
import Home from "./Home";
import Left from "./common/Left";
import Right from "./common/Right";
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
import Demo from "./Demo";
import EMI from "./emi/EMI";
import HOC_Country from "./hoc/HOC_Country";
import HOC_State from "./hoc/HOC_State";
import CalcuInput from "./component/CalcuInput";
import UseHook from "./component/UseHook";
import PageNum from "./component/PageNum";
import Basic from "./component/Basic";
import ClassComp from "./LifeCycle/ClassComp";
import GithubClass from "./LifeCycle/GithubClass";
import LifeCycle from "./LifeCycle";
import GithubFn from "./LifeCycle/GithubFn";
import Timer from "./component/Timer";
import Miscs from "./Miscs";
import HookCallback from "./hooks/HookCallback";
import HookReducer from "./hooks/HookReducer";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Menubar />
          <div className="row ">
            <Left />
            <div className="col-8 bg-light bg-opacity-75">
              <Routes>
                <Route path="/timer" element={<Timer />} />
                <Route path="/miscs" element={<Miscs />} />
                <Route path="/hookparams/:id" element={<HookParams />} />
                <Route path="/githubfn" element={<GithubFn />} />
                <Route path="/githubclass" element={<GithubClass />} />
                <Route path="/classcomp" element={<ClassComp />} />
                <Route path="/Basic" element={<Basic />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cricket" element={<Cricket />} />
                <Route path="/bollywood" element={<Bollywood />} />
                <Route path="/liftstateup" element={<LiftState />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/form" element={<FormFn />} />
                <Route path="/test" element={<Test />} />
                <Route path="/wordcount" element={<WordCount />} />
                <Route path="/misc" element={<Misc />} />
                <Route path="/calcuinput" element={<CalcuInput />} />
                <Route path="/usehook" element={<UseHook />} />
                <Route path="/pagenum" element={<PageNum />} />
                <Route
                  path="/hooklayouteffect"
                  element={<HookLayoutEffect />}
                />
                <Route path="/hookmemo" element={<HookMemo />} />
                <Route path="/formvalidation" element={<FormValidation />} />
                <Route path="/lifecycle" element={<LifeCycle />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/emi" element={<EMI />} />
                <Route path="/hoccountry" element={<HOC_Country />} />
                <Route path="/hocstate" element={<HOC_State />} />
                <Route path="/hookcallback" element={<HookCallback />} />
                <Route path="/hookreducer" element={<HookReducer />} />
              </Routes>
            </div>
            <Right />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
