
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Box , CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/contants'
import { FetchApiData} from '../utils/FetchApiData'
import { Videos, ChannelCard } from './'


const ChannelDetail = () => {
    const { channelId } = useParams()
    const [channelDetail, setChannelDetail] = useState(null)
    const [channelVideos, setChannelVideos] = useState([])
   
    console.log(channelId)
    useEffect(() => {
        const getChannelDetails = async () => {
            const { items } = await FetchApiData(`channels?part=snippet&id=${channelId}`)
            setChannelDetail(items[0])
            console.log('details',items[0])
        }
        const getChannelVideos = async () => {
            const { items } = await FetchApiData(`search?part=snippet&channelId=${channelId}&maxResults=20&order=date&type=video`)
            setChannelVideos(items)
            // console.log(items)
        }

        getChannelDetails()
        getChannelVideos()


    }, [channelId])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
        style={{
         zIndex: 10,
         height: "300px",
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,9,121,1) 35%, rgba(0,212,255,1) 100%)'
        }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm:'100px'} }}/>
           <Videos videos={channelVideos} />
          
         

      </Box>
 
    </Box>
  )
}

export default ChannelDetail