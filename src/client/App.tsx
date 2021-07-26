import { useEffect, useState } from "react";

import { SearchBox } from "./components/SearchBox";
import { Results } from "./components/Results";
import { getSecurity, SecurityType } from "../securities-service/getSecurity";
import { data } from "../securities-service/data";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SecurityType[]>([]);

  useEffect(() => {
    const results = getSecurity(searchTerm, data);
    setResults(results);
  }, [searchTerm]);

  console.log(searchTerm);
  return (
    <div className="App">
      <h1>Stock Searcher</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Results results={results} />
    </div>
  );
};

export default App;
