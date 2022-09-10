import { Link } from 'react-router-dom'
import {  Typography , Card , CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl,demoVideoTitle,demoChannelTitle } from '../utils/contants'


const VideoCard = ({video:{id:{videoId},snippet}}) => {
    // console.log(videoId,snippet)
  return (
    <Card sx={{ width: {xs: '100%',sm:'280px', md: '280px' }, boxShadow: 'none' }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{height:'200px', width:{xs: '100%',sm:'280px', md: '280px' }}}
            />
        </Link>
        <CardContent sx={{ height:'106px', backgroundColor:'#1e1e1e'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFf">
                {snippet.title.slice(0,50) || demoVideoTitle.slice(0,50)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`: demoVideoUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="#FFf">
                {snippet?.channelTitle || demoChannelTitle} 
                <CheckCircle sx={{color:'#F31503', fontSize: 12 , ml: '5px'}}/>
            </Typography>
        </Link>
        </CardContent>

    </Card>
  )
}

export default VideoCard