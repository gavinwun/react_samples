import logo from './logo.svg';
import './App.css';

import AutoCompleteAddress from './AutoCompleteAddress';

function App() {
  const handlePlaceSelected = (place) => {
    console.log("Selected Place: ", place);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <form>
        <h2>Address Autocomplete</h2>
        <AutoCompleteAddress onPlaceSelected={handlePlaceSelected} />
        {/* Add other form fields if needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
