import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

const Bar = styled(LinearProgress)(({ theme, color }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#E5E5E5EE",
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color ? color : '#E69900',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  export default Bar