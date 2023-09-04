import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";

const Menubar = () => {
  return (
    <>
      <div className="row bg-info bg-opacity-75">
        <div className="col-12 text-center">
          <Navbar>
            <NavDropdown
              title="Hooks"
              id="nav-dropdown"
              className="btn btn-outline-success"
            >
              <NavDropdown.Item>
                <Link to="/miscs" className="nav-link btn btn-outline-success">
                  Miscs
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/hookreducer"
                  className="nav-link btn btn-outline-success"
                >
                  Reducer
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/hookcallback"
                  className="nav-link btn btn-outline-success"
                >
                  HookCallback
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/timer" className="nav-link btn btn-outline-success">
                  Timer
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/githubfn"
                  className="nav-link btn btn-outline-success"
                >
                  Github Fn
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/githubclass"
                  className="nav-link btn btn-outline-success"
                >
                  Github Class
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/classcomp"
                  className="nav-link btn btn-outline-success"
                >
                  Class Comp
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/formvalidation"
                  className="nav-link btn btn-outline-success"
                >
                  FormValidation
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/usehook"
                  className="nav-link btn btn-outline-success"
                >
                  UseHook
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/pagenum"
                  className="nav-link btn btn-outline-success"
                >
                  PageNum
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/calcuinput"
                  className="nav-link btn btn-outline-success"
                >
                  CalcuInput
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/hooklayouteffect"
                  className="nav-link btn btn-outline-success"
                >
                  HookLayoutEffect
                </Link>
                <Link
                  to="/lifecycle"
                  className="nav-link btn btn-outline-success"
                >
                  LifeCycle
                </Link>
                <Link to="/emi" className="nav-link btn btn-outline-success">
                  EMI
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/todo" className="nav-link btn btn-outline-success">
              ToDo List
            </Link>
            <Link to="/home " className="nav-link btn btn-outline-success">
              Home
            </Link>
            <Link to="/cricket" className="nav-link btn btn-outline-success">
              Cricket
            </Link>
            <Link to="/bollywood" className="nav-link btn btn-outline-success">
              Bollywood
            </Link>
            <Link
              to="/liftstateup"
              className="nav-link btn btn-outline-success"
            >
              LiftStateUp
            </Link>
            <Link to="/form" className="nav-link btn btn-outline-success">
              FormFn
            </Link>
            <Link to="/test" className="nav-link btn btn-outline-success">
              Test
            </Link>
            <Link to="/wordcount" className="nav-link btn btn-outline-success">
              Word Count
            </Link>

            <Link to="/misc" className="nav-link btn btn-outline-success">
              Misc
            </Link>
            <Link to="/hookmemo" className="nav-link btn btn-outline-success">
              HookMemo
            </Link>
            <Link to="/demo" className="nav-link btn btn-outline-success">
              Demo
            </Link>

            <Link to="/hoccountry" className="nav-link btn btn-outline-success">
              HOC Country
            </Link>
            <Link to="/hocstate" className="nav-link btn btn-outline-success">
              HOC State
            </Link>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Menubar;
