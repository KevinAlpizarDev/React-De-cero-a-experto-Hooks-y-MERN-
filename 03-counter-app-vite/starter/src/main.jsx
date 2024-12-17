import React from "react";
import ReactDom from "react-dom/client"
// import { App } from "./App";
import './index.css';
import { CounterApp } from "./CounterApp";


ReactDom.createRoot(document.getElementById("root")).render(

<React.StrictMode>
{/* <App title="Soy Kevin" subtitle={1234}  /> */}
<CounterApp value={0}  />
</React.StrictMode>

)