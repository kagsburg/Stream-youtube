import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar, Home, VideoDetail,ChannelDetail,SearchFeed } from './components';

 const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Box sx={{  }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:channelId" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}
export default App
