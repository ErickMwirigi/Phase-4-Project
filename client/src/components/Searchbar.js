import React, { useState } from "react";
import { ReactComponent as Search} from "../SearchIco.svg"

export default function Searchbar({ searched }) {


  function handleChange(e){
    searched(e.target.value)
  }

  return (
      <>
        <input className='search' onChange={handleChange} type='text'/>
        <Search />
      </>
        
  )
}
