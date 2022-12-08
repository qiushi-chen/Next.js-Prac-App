import * as React from 'react';
import Image from 'next/image';
import { ReactElement } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { BRAND_NAME, LOGIN } from '@/constants';
import { ScrollTop, ElevationScroll } from '@/components/ui/scroll.helper';

interface Props {
  children: ReactElement;
}

const NavBar = (props: Props) => {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position='sticky'>
          <Toolbar>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt={BRAND_NAME}
                width='39' // 158/4=39.5
                height='41' // 165/4=41.25
              />
            </Link>

            <Typography variant='h5' component='a' href='/' sx={{ mx: 'auto' }}>
              {BRAND_NAME}
            </Typography>

            <Link variant='h6' color='inherit' href='/auth' underline='none'>
              {LOGIN}
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id='back-to-top-anchor' />

      <ScrollTop {...props}>
        <Fab size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default NavBar;
