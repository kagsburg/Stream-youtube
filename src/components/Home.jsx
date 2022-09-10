import { useState, useEffect } from 'react'

import { Box, Stack, Typography } from '@mui/material'
import {Sidebar , Videos} from './'
import { FetchApiData} from '../utils/FetchApiData'

const Home = () => {
  const [videos, setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("New")


  useEffect(() => {
    FetchApiData(`search?part=snippet&q=${selectedCategory}`)
    .then((response) => setVideos(response.items))
  }, [selectedCategory])
  return (        
  <Stack sx={{ flexDirection:{ sx:"column", md:"row"}}}>
          <Box sx={{ height:{ sx:'auto', md:'92vh'}, 
          borderRight:'1px solid #3d3d3d', px:{ sx: 0, md: 2} }}>

            <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            
            />
            <Typography className="copyright" variant='body2' sx={{mt:1.5,color:'#fff'}}>
                &copy;Copyright 2022 All Rights Reserved
            </Typography>
          </Box>
          <Box p={2} sx={{overflowY:'auto',height:'90vh', flex: 2}}>
             <Typography variant ="h4" fontWeight="bold" mb ={2} sx={{ color:'black'}}>
              {selectedCategory} <span style={{ color:'#F31503'}}>Videos</span>
             </Typography>
             <Videos videos = {videos}/>
          </Box>
            
        </Stack>

  )
}

export default Home