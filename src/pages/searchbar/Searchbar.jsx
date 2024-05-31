import React, { useState, useEffect, useCallback } from "react";
import searchicon from "../../global/Images/headericons/search.svg.svg";
 
 

export const Searchbar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);


 

    return ( 

        <div className="searchbox">
            <input
              className="search-style"
              type="text"
              placeholder="search...."
              value={searchValue}
              onChange={changeSearchValue}
              
               />
              <div className="search-icon-box"> <img className="search-icon" src={searchicon} alt="My Icon" width="20" height="20" /> </div> 

      <div className="search-bar-results"></div>
    </div>
    );
}