import Header from "../../components/Header";
import Barchart from "../../components/barchart";
import { Box } from "@mui/material";
const Barchartpage=()=>{
return(
    <Box >
        <Box><Header title="Nivo charts" subtitle="Nivo Bar chart"/></Box>
        <Box height="75vh"><Barchart/> </Box>
    </Box>   
);
}
export default Barchartpage;