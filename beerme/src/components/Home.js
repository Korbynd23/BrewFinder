import "../styles/app.css";
// import SearchContainer from "./SearchContainer";
import NavBar from "./NavBar";
import BrewPicOne from "./BrewPicOne";

function App() {

    return (
        <div>
            <NavBar />
            {/* <body><SearchContainer /></body> */}
            <BrewPicOne />
            <footer>Footer</footer>
        </div>
    )
}

export default App;