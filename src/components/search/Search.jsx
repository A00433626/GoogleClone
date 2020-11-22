import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'
function Search() {
    return (
    <div className="search-box">
<div className="search-box-input">
    {/* Search Icon */}
    <SearchIcon className='search-box-input-search-icon'/>
    {/* Input field */}
    <input/>
      {/* Mic Icon */}
    <MicIcon className='search-box-input-microphone-icon'/>
</div>
<div className="search-box-buttons">
    <Button variant='outlined'>Google Search</Button>
    <Button variant='outlined'>I'm Feeling Lucky</Button>
</div>
</div>
)
}

export default Search
