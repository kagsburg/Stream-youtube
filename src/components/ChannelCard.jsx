import { Box , CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/contants'

const ChannelCard = ({channelDetail,marginTop}) =>  (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:{ xs: '356px', md: '320px'},
        height:'326px',
        margin: '0 auto',
        marginTop, 
    }}>
        <Link to={ channelDetail?.id?.channelId ? `/channel/${channelDetail?.id?.channelId}`:`/channel/${channelDetail?.id}` }>
            <CardContent sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', textAlign:'center',color:'$fff'}}>
                <CardMedia
                component="img"
                image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{height:'200px', width:'180px' ,borderRadius:'50%',mb: 2, border:'1px solid #3d3d3d'}}
                />
                <Typography variant="subtitle1" fontWeight="bold" color="#000">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{color:'#F31503', fontSize: 14 , ml: '5px'}}/>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography variant="subtitle2" fontWeight="bold" color="#FFf">
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
                </CardContent>
        </Link>

    </Box>
  )

export default ChannelCard