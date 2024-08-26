
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
    const  auth = true;

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2}}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="h6" component={Link} to={'/'} sx={{ flexGrow: 1, fontSize: 20}}>
            Reposty
          </Button>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
