import {useState} from 'react'
import { Paper, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();
  const handleSearch = (e) => {  
    e.preventDefault();
    if (searchTerm) {
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
    }
  }
  return (
    <div>
        <Paper component="form"
            onSubmit={handleSearch}
         sx={{ borderRadius:20, mr:{sm:5},pl:2,boxShadow:'none' }}>
            <input 
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px',color:'red' }} aria-label="search">
                <Search />
            </IconButton>
            {/* <InputBase  
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search For Videos"
                inputProps={{ 'aria-label': 'search google maps' }}
            /> */}
        </Paper>



    </div>
  )
}

export default SearchBar