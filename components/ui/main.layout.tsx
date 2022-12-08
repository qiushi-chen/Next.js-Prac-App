import { ReactElement } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import NavBar from '@/components/ui/nav.bar';
import Footer from '@/components/ui/footer';

interface Props {
  children: ReactElement;
}

const MainLayout = (props: Props) => (
  <>
    <NavBar {...props} />
    <CssBaseline />
    <Container maxWidth='lg'>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }}>{props.children}</Box>
    </Container>
    <Footer />
  </>
);

export default MainLayout;
