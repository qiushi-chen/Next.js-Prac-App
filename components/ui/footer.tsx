import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Copyright from '@/components/ui/copyright';

export default function Footer() {
  return (
    // <Box
    //   sx={{
    //     marginTop: '9vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     minHeight: '10vh',
    //   }}>
    //   <CssBaseline />
    //   <Box
    //     component='footer'
    //     sx={{
    //       py: 3,
    //       px: 2,
    //       mt: 'auto',
    //       backgroundColor: (theme) =>
    //         theme.palette.mode === 'light'
    //           ? theme.palette.grey[200]
    //           : theme.palette.grey[800],
    //     }}>
    //     <Container maxWidth='sm'>
    //       <Copyright />
    //     </Container>
    //   </Box>
    // </Box>

    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
      <CssBaseline />
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='text.secondary'
        component='p'>
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
