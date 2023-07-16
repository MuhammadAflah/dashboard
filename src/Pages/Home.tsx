import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Widget from '../components/widget'

const Home = () => {
  return (
    <Box sx={{display:"flex"}}>
        <Box>
            <Sidebar/>
        </Box>
        <Box>
            <Widget/>
        </Box>
    </Box>
  )
}

export default Home