import "./App.css";
import Resume from "./components/Resume";
import Border from "./otherAssignments/Border";
import List from "./otherAssignments/List";
import OnFunctions from "./otherAssignments/OnFunctions";

function App() {
    const items = [
        {
            id: 1,
            body: "First Item",
            severity: 1,
            status: 0,
        },
        {
            id: 2,
            body: "Second Item",
            severity: 2,
            status: 1,
        },
        {
            id: 3,
            body: "Third Item",
            severity: 3,
            status: 2,
        },
        {
            id: 4,
            body: "Fourth Item",
            severity: 4,
            status: 2,
        },
        {
            id: 5,
            body: "Fifth Item",
            severity: 5,
            status: 3,
        },
    ];

    const arr = ["Ford", "BMW", "Fiat", "Farrari", "Jeep"];

    return (
        <div className="App">
            {/* <h1>Jai shree ram</h1> */}
            <Border>
                <Resume />
            </Border>
            {/* <Border>
                <List items={arr} layout={"numbered"} />
            </Border>
            <Border>
                <List items={arr} layout={"alpha"} />
            </Border>
            <Border>
                <List items={arr} layout={"bullet"} />
            </Border> */}
            <OnFunctions />
        </div>
    );
}

export default App;
