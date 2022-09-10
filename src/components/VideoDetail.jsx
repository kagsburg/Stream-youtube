import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Stack,Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Videos} from './';
import { FetchApiData } from '../utils/FetchApiData'

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getChannelDetails = async () => {
        const { items } = await FetchApiData(`videos?part=snippet&id=${id}`)
        setVideo(items[0])
        // console.log('details',items[0])
    }  
    const getrelatedVideos = async () => {
        const { items } = await FetchApiData(`search?part=snippet&relatedToVideoId=${id}&maxResults=20&type=video`)
        setRelatedVideos(items)
        console.log(items)
    }
    getChannelDetails()
    getrelatedVideos()


}, [id])
if (!video?.snippet) return 'Loading...';
  //object destructuring
  const { snippet:{ title , channelId, channelTitle} , statistics:{ viewCount ,likeCount} } = video ;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs:'column',md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width:'100%',position: 'sticky', top:'86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls />
            <Typography variant="h6" color="textPrimary" gutterBottom p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" px={2} py={1}
             sx={{ color:'#000'}}  >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1',  md:'h6'}} color="textPrimary" gutterBottom>
                  {channelTitle}
                  <CheckCircle  sx={{ fontSize:'12px', ml:'5px' , color:'red'}}  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" color="textPrimary" gutterBottom>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>

            </Stack>

          </Box>
        </Box>
      <Box display="flex" px="2" py={{ md:1, xs:5 }} justifyContent="center" alignItems="center">
        <Videos videos={relatedVideos} direction="column" />
      </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail