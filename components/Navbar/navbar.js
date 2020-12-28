import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Switch, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link';

const drawerWidth= "30%";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        height: '100px',
        justifyContent: 'center',
    },
    drawerPaper: {
        width: drawerWidth
    },
    closeMenuButton: {
        marginLeft: 'auto',
        marginRight: 0,
    },
    menuButton: {
        marginLeft: 'auto',
        marginRight: 0,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    return(
        <header>
            <AppBar
                position="fixed" 
                color="transparent"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                       color="inherit"
                       aria-label="Open drawer"
                       edge="start"
                       size="medium"
                       onClick={handleDrawerToggle}
                       className={classes.menuButton}
                     >
                       <MenuIcon
                       fontSize='large'
                       style={{ color: "#CFC9D7" }}
                       />
                     </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    anchor={'right'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                      paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <IconButton fontSize="large" onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                        <CloseIcon
                         size="medium"
                         style={{ color: "#CFC9D7" }}
                        />
                    </IconButton>
                    <List className={classes.list}>
                        <Link href='/'>
                            <ListItem button>
                                <ListItemText>
                                    index
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link href='/about'>
                            <ListItem button>
                                <ListItemText>
                                    about
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link href='/projects'>
                            <ListItem button>
                                <ListItemText>
                                    projects
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                    
                </Drawer>
            </nav>
        </header>
    );
};

export default Navbar;