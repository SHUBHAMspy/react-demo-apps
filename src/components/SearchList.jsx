import { useEffect, useState } from "react";

const SearchList = ({setCountryList,setcurrentSearch}) => {
  const [countryName, setCountryName] = useState('');

  useEffect(() => {
    
  const getCountries = async() => {

    if(countryName.length >= 2){
      try {
        
        const countries = await (await fetch(`https://restcountries.com/v2/name/${countryName}`)).json();
        console.log(countries);
        if(countries)setCountryList(countries)
      } catch (error) {
        console.log(error.message);
      }
    }
      
    }  
    getCountries()
  
  }, [countryName,setCountryList])
  

  const handleChange = async(e) => {
    const currentValue = e.target.value;
    console.log(currentValue);
    setCountryName(currentValue);
    setcurrentSearch(currentValue);
    
  }

  // const handleClick = () => {
  //   setCountryList(countryName);
  // }

  return (
    <div>
      <h3>Search Countries</h3>
      <input type="text" value={countryName} onChange={handleChange}/>
      {/* <button onClick={() => handleClick()}>Add</button> */}
    </div>
  )
}

export default SearchList