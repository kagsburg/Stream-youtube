import { useState, useEffect } from 'react'

import { Box, Typography } from '@mui/material'
import { Videos} from './'
import { FetchApiData} from '../utils/FetchApiData'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()  

  useEffect(() => {
    FetchApiData(`search?part=snippet&q=${searchTerm}`)
    .then((response) => setVideos(response.items))
  }, [])
  return (        
    <Box p={2} sx={{overflowY:'auto',height:'90vh', flex: 2}}>
    <Typography variant ="h4" fontWeight="bold" mb ={2} sx={{ color:'black'}}>
     Search Results for <span style={{ color:'#F31503'}}>{searchTerm}</span>
    </Typography>
    <Videos videos = {videos}/>
 </Box>

  )
}

export default SearchFeed