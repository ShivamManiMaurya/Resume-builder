import "./App.css";
import FilteredList from "./otherAssignments/FilteredList";
import NationDropdown from "./otherAssignments/NationDropdown";

function App() {
    return (
        <div className="App">
            <h4 style={{ textDecoration: "underline" }}>Dropdown Assignment</h4>
            <NationDropdown />
            <h4>
                ----------------------------------------------------------------------
            </h4>
            <h4 style={{ textDecoration: "underline" }}>Filter Assignment</h4>
            <FilteredList />
        </div>
    );
}

export default App;
