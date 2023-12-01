import React, { useState } from "react";
import { ReactComponent as Search} from "../SearchIco.svg"

export default function Searchbar({ searched }) {
   const [ search, setSearch] = useState()

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
      <>
        <input className='search' placeholder="Search here" value={search} onChange={handleChange} type='search'/>
        <button type="submit" onClick={()=>searched(search)}><Search /></button>
      </>
        
  )
}
