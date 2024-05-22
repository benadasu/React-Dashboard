import Header from "../../components/Header";
import { Box } from "@mui/material";
import Linechart from "../../components/linechart";
const Linechartpage=()=>{
return(
    <Box >
        <Box><Header title="Nivo charts" subtitle="Nivo Linechart"/></Box>
        <Box height="75vh"><Linechart/> </Box>
    </Box>   
);
}
export default Linechartpage;