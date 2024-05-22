import Header from "../../components/Header";
import { Box } from "@mui/material";
import Table from "../../components/table";
const Tablepage=()=>{
return(
    <Box >
        <Box><Header title="MUI DataGrid" subtitle="material UI gatagrid"/></Box>
        <Box height="75vh"><Table/> </Box>
    </Box>   
);
}
export default Tablepage;