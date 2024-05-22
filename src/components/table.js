import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam} from '../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../theme";
const Table=()=>
    {   
        const theme=useTheme();
        const colors=tokens(theme.palette.mode);
        const columns=[
            {field:"id",headerName:"ID" },
            {field:"name",headerName:"Name",className:"name-column--cell", flex:1},
            {field:"email",headerName:"Email",flex:1 },
            {field:"age",headerName:"Age" },
            {field:"phone",headerName:"Phone Number",flex:1 },
            {field:"access",headerName:"Access Level",flex:1,
            renderCell:({row:{access}})=>{
                return(<Box
                width="60%"
                backgroundColor={
                    access === 'admin' ? (colors.greenAccent[800]) : (colors.greenAccent[400])
                }
                display="flex" 
                justifyContent="center"                   
                sx={{m:"15px"}}       >
                   {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>} 
                   {access === 'manager' && <SecurityOutlinedIcon/>}
                   {access === 'user' && <LockOpenOutlinedIcon/>}
                   <Typography
                   color={colors.grey[400]} sx={{ml:"15px"}}>
                    {access}
                   </Typography>
                </Box>);
            }
               
             },
        ];
        return (
            <Box m="40px 0  0 0" height="75vh"
                sx={{
                "& .MuiDataGrid-root":{
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    border:"none"
                },
                "& .name-column--cell":{
                    color:colors.grey[300]
                },
                "& .MuiDataGrid-columnHeaders":{
                        backgroundColor:colors.blueAccent[700],
                        borderBottom:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor:colors.primary[700],                   
                },
                "& .MuiDataGrid-footerContainer":{
                        backgroundColor:colors.blueAccent[700],
                        borderTop:"none"
                },
                }}>
                <DataGrid rows={mockDataTeam} columns={columns}/>
            </Box>            
        );
    }
export default Table;