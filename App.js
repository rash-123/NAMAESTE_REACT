/*
create the nested element in the react
<div id="parent">
    <div id="child">
        <h1> I'm a h1 </h1>
        <h2> I'm a h1 </h2>
    </div>
    <div id="child">
        <h1> I'm a h1 </h1>
        <h2> I'm a h1 </h2>
    </div>
</div>
 */

const parent = React.createElement("div",{ id: "parent" },[
    React.createElement("div",{ id: "child1" },
        [React.createElement("h1", {}, "I'm a h1"),
        React.createElement("h2", {}, "I'm a h2")
        ]),
    React.createElement("div",{ id: "child2" },
        [React.createElement("h1", {}, "I'm a h1"),
        React.createElement("h2", {}, "I'm a h2")
        ])
    ]);

console.log(parent);

    //root is the place all the react code will run
const root = ReactDOM.createRoot(document.getElementById("root"));

    //render means it will sh
root.render(parent);
