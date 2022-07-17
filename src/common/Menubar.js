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
                <Link
                  to="/formvalidation"
                  className="nav-link btn btn-outline-success"
                >
                  FormValidation
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/hooklayouteffect"
                  className="nav-link btn btn-outline-success"
                >
                  HookLayoutEffect
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
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Menubar;
