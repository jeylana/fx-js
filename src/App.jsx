import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ElephantInfo from "./pages/ElephantInfo";
import "./global.css";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter history>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/elephant/:index"} element={<ElephantInfo />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
