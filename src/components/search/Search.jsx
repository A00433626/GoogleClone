import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
function Search() {
    const [inputData,setInputData]=useState('')
    const history=useHistory();
    const searchClicked=(event)=>{
      event.preventDefault();
      if (event.key === 'Enter' || event.keyCode === 13) {
        history.push('/search')
    }
      history.push('/search')
    }
    return (
    <div className="search-box">
<div className="search-box-input">
    {/* Search Icon */}
    <SearchIcon className='search-box-input-search-icon'/>
    {/* Input field */}
    <input value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
      {/* Mic Icon */}
    <MicIcon className='search-box-input-microphone-icon'/>
</div>
<div className="search-box-buttons">
    <Button type='submit' variant='outlined' onClick={searchClicked}>Google Search</Button>
    <Button variant='outlined'>I'm Feeling Lucky</Button>
</div>
</div>
)
}

export default Search
