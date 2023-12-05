import React, { useState } from "react";
import { ReactComponent as Search} from "../SearchIco.svg"

export default function Searchbar({ searched }) {
   const [ search, setSearch] = useState()

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
      <>
        <input placeholder="Search here" value={search} onChange={handleChange} type='search'/>
        <button className='submit' type="submit" onClick={(search)=>searched(search)}><Search /></button>
      </>
        
  )
}
