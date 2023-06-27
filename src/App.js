import React from "react";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import styles from './scss/app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
