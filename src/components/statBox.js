import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from './progresscircle';
const StatBox=({title, subtitle, icon, progress, increase})=>
{
    const themes=useTheme();
    const colors=tokens(themes.palette.mode);
return(
    <Box m="0 30px" width="100%">
        <Box display="flex" justifyContent="space-between">
            <Box>
                {icon}
                <Typography
                variant="h4"
                fontWeight="bold"
                sx={{color:colors.grey[100]}}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <ProgressCircle/>
            </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="10px">
            <Box>                
                <Typography
                variant="h5"
                sx={{color:colors.greenAccent[500]}}
                >
                    {subtitle}
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h5"
                    sx={{color:colors.greenAccent[600]}}
                    >
                        {increase}
                </Typography>
            </Box>
        </Box>
    </Box>
);
}
export default StatBox;