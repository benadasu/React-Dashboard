import { Box, Button, IconButton, Tab, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import Linechart from "../../components/linechart";
import Piechart from "../../components/piechart";
import Barchart from "../../components/barchart";
import StatBox from "../../components/statBox";
import ProgressCircle from "../../components/progresscircle";
import { PointOfSale } from "@mui/icons-material";
import Table from "../../components/table";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{m:"20px"}}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
              <Header title="DASHBOARD" subtitle="welcome to Dashboard"/>
          </Box>
          <Box >
              <Button
              sx={{backgroundColor:colors.blueAccent[700],
                color:colors.grey[100],
                padding:"10px 20px"
              }}>
                <DownloadOutlinedIcon/>
                download reports
              </Button>
          </Box>
      </Box>
      <Box
      display="grid"
      gridTemplateColumns="repeat(12,1fr)"
      gridAutoRows="140px"
      gap="20px"
      >
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
          <StatBox
          title="12,000"
          subtitle="Email sent"
          progress="0.75"
          increase="+14%"
          icon={
            <EmailIcon sx={{color:colors.greenAccent[600]}}/>
          }/>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
          <StatBox
          title="32,441"
          subtitle="New client"
          progress="0.5"
          increase="+5%"
          icon={
            <PersonAddIcon sx={{color:colors.greenAccent[600]}}/>
          }/>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <StatBox
          title="1,321"
          subtitle="Traffic Bound"
          progress="0.6"
          increase="+10%"
          icon={
            <TrafficIcon sx={{color:colors.greenAccent[600]}}/>
          }/>
          </Box>
          <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <StatBox
          title="36,458,89"
          subtitle="Sales Obtained"
          progress="0.7"
          increase="+14%"
          icon={
            <PointOfSale sx={{color:colors.greenAccent[600]}}/>
          }/>
          </Box>
          {/* {row 2} */}
          <Box 
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          gridRow="span 2"
          >
            <Linechart />
          </Box>
          <Box 
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          gridRow="span 2"
          overflow="auto"
          >
            <Table />
          </Box>
        <Box
        gridColumn="span 6"
        backgroundColor={colors.primary[400]}
        gridRow="span 2"        >
          <Barchart/>
        </Box>
        <Box
        gridColumn="span 6"
        backgroundColor={colors.primary[400]}
        gridRow="span 2"        >
          <Piechart/>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
