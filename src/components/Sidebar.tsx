import { Box } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const Sidebar = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white', boxShadow: "5px", width:"15rem"}}>
      <Box sx={{ display: 'flex', marginLeft: '2px', justifyContent: "center" }}>
        <img src="https://www.flexiant.com/wp-content/uploads/odin-logo-color-rgb.jpg" alt="Admin Logo" style={{ height: '6rem', marginRight: '8px', width: "60%" }} />
      </Box>
      <Divider sx={{ height: 0, border: '0.3px solid rgb(230, 227, 227)' }} />
      <Box sx={{}}>
        <List component="ul">
          <ListItem sx={{color: 'violet', alignItems:"center" }}>
            <ListItemIcon>
              <DashboardIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Aware" sx={{ fontSize: '13px', fontWeight: 600, color: '#888' }} />
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <BarChartRoundedIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ fontSize: '13px', fontWeight: 600, color: '#888' }} />
          </ListItem>
          <ListItem >
            <ListItemIcon>
              <PersonRoundedIcon sx={{ fontSize: '18px', color: '#7451f8' }} />
            </ListItemIcon>
            <ListItemText primary="Admin" sx={{ fontSize: '13px', fontWeight: 600, color: '#888'}} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
