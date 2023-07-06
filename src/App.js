import "./App.css";
import FilteredList from "./otherAssignments/FilteredList";
import NationDropdown from "./otherAssignments/NationDropdown";

function App() {
    return (
        <div className="App">
            <NationDropdown />
            <FilteredList />
        </div>
    );
}

export default App;
