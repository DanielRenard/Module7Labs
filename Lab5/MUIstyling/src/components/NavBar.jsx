import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";
// import '../styles/navBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(){
  const {theme} = useContext(MyThemeContext)

//   return (
//     <nav className="navbar">
//       <ul>
//         {/* <li><NavLink to="/">Landing Page</NavLink></li> */}
//         <li><NavLink to="/HomePage">HomePage</NavLink></li>
//         <li><NavLink to="/BitCoinRates">Bitcoin Rates</NavLink></li>
//         <li><NavLink to="/login">Login</NavLink></li>
//       </ul>
//     </nav>
//   )
// }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > 
          <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            You're watching CNN
          </Typography>
          <Button href="/HomePage" aria-label="add" variant ="contained" size="large">HomePage</Button>
          <Button href="/BitCoinRates" aria-label="add" variant ="contained" size="large">Bitcoin Rates</Button>
          <Button href="/login" aria-label="add" variant ="contained" size="large">Login</Button>          
        </Toolbar>
      </AppBar>
    </Box>
  );
}