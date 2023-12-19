import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (<h1 className="heading">
    Namaeste react in JSX
</h1>);

const number = 10000;

//Component Composition
const HeadingComponent3 = () => (
    <div id="container">
        {Title()}
        <Title></Title>
        <Title />
        <h1 className="heading">this is a functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//this is the way you rendered the Component in the browser
root.render(<HeadingComponent3 />);