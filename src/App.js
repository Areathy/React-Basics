import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Game from "./components/game/Tictactoe";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <p>Hello People.</p>
          <a
            className="App-link"
            href="https://henrietha.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet me.
          </a>
        </header>
        <Game />
      </div>
      <ShoppingList />
    </>
  );
}
export default App;
