import MainLayout from '@/components/ui/main.layout';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Home page</h1>
        <Box sx={{ my: 2 }}>
          {[...new Array(22)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Home;
