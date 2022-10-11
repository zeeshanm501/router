import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Jeans from "../screens/Men";
import T_shirt from "../screens/diary";
import Zipper from "../screens/women";
import NotFound from "../screens/notFound";
import "../App.css";

function AppRouter(props) {
  return (
    <>
      <Router>
        <div className="list">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              fontSize: "24px",
              border: "1px solid black",
              backgroundColor: "black",
              padding: "15px 0px",
              textDecoration: 'none',
              zIndex: 1
            }}
          >
            <li>
              <Link className="links" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/">Home</Link>
            </li>
            <li>
              <Link className="links" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="jeans">Jeans</Link>
            </li>
            <li>
              <Link className="links" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="t-shirt">T-shirt</Link>
            </li>
            <li>
              <Link className="links" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="zipper">Zipper</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home details={props.details} />} />
          <Route path="jeans" element={<Jeans details={props.details} />} />
          <Route path="t-shirt" element={<T_shirt details={props.details} />} />
          <Route path="zipper" element={<Zipper details={props.details} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
