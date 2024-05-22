import Header from "../../components/Header";
import { Box } from "@mui/material";
import Piechart from "../../components/piechart";
const Piechartpage=()=>{
return(
    <Box >
        <Box><Header title="Nivo charts" subtitle="Nivo Piechart"/></Box>
        <Box height="75vh"><Piechart/> </Box>
    </Box>   
);
}
export default Piechartpage;