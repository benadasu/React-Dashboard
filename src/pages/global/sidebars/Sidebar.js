import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu,sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { LineStyleOutlined } from "@mui/icons-material";

const Item = ({ title, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <SubMenu 
        active={selected === title}
        style={{
          color: colors.grey[100],        
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        label={title}
       >
        
        <MenuItem style={{ color:colors.blueAccent[500]}} icon={<BarChartOutlinedIcon/>} component={<Link to="/barchart" />}          > 
          <Typography>Bar Chart</Typography>              
        </MenuItem>
        <MenuItem icon={<PieChartOutlineOutlinedIcon/> } style={{ color:colors.blueAccent[500]}} component={<Link to="/piechart" />}> 
          <Typography>Pie Chart</Typography>            
        </MenuItem>
        <MenuItem icon={ <LineStyleOutlined/>} style={{ color:colors.blueAccent[500]}} component={<Link to="/linechart" />}> 
          <Typography>Line Chart</Typography>            
        </MenuItem>
      </SubMenu>   
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box >
      <Sidebar style={{height: '1000px'}} collapsed={isCollapsed}>
        <Menu 
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 1)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? colors.blueAccent[500]:colors.primary[900],
              };
          },
        }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                React dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                 Mr. Manager
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>          
              <MenuItem icon={<HomeOutlinedIcon/>} component={<Link to="/"/>}> Dashboard </MenuItem>
              <MenuItem icon={<HomeOutlinedIcon/>}  component={<Link to="/table"/>}> Table </MenuItem>              
            <Item
              title="Charts"              
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />                        
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
