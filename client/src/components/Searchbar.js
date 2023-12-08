import React, { useState } from "react";
import { ReactComponent as Search} from "../SearchIco.svg"

export default function Searchbar({ products }) {
  const [ search, setSearch] = useState()
  const [ searchResults, setSearchResults] = useState([])

  function handleChange(e){
    setSearch(e.target.value)

    const results = products.filter((item)=>{
      return e.target.value && item && item.name && item.name.toLowerCase().includes(e.target.value)
    })
    setSearchResults(results)
  }

  const searchItems = searchResults.map((item)=>{
    return <div className="search-details" key={item.id} onClick={()=>alert(`You have selected from ${item.category} category`)}><img src={item.imageUrl} alt={item.name}/><span>{item.name}</span></div>
  })
  // <button className='submit' type="submit" onClick={(search)=>searched(search)}></button>
  return (
      <div className="search-container">
        <div className="search-bar">
          <input className="search-input" placeholder="Search here" value={search} onChange={handleChange} type='search'/>
          <Search />
        </div>
        <div className="search-results">{searchItems}</div>
      </div>   
  )
}
