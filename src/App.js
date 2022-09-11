import { useState } from 'react';
import './App.css';

import SearchList from './components/SearchList';


function App() {
  const [countryList, setCountryList] = useState([]);
  const [currentSearch, setcurrentSearch] = useState('');

  const handleMouseOver = (e) => {
    console.log(e.target);
    // for (let index = 0; index < currentSearch.length; index++) {
    //   if (currentSearch[index] === ('a'||'e'||'i'||'o'||'u')) {
    //     currentSearch.
    //   }
      
    // }
  }
  return (
    <div className="App">
      <h1 onMouseOver={handleMouseOver}>{currentSearch}</h1>
      <SearchList setCountryList={setCountryList} setcurrentSearch={setcurrentSearch}/>
      <>
        {countryList.map((country,index) => (
          <div key={index}>{country.name}</div>
        ))}
      </>
      
    </div>
  );
}

export default App;
