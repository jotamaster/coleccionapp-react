import React from 'react'
import {Drawer,IconButton,Divider,List,ListItem,ListItemIcon,ListItemText} from '@material-ui/core'
import {ChevronRight as ChevronRightIcon,ChevronLeft as ChevronLeftIcon,People as PeopleIcon, ViewModule as ViewModuleIcon, Person as PersonIcon, Favorite as FavoriteIcon, ExitToApp as ExitToAppIcon} from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height : '100vh',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  }
});

const DrawerApp = (props) => {
    const { classes,open,handleDrawerClose,theme,onCloseSession } = props;
    return (
        <Drawer
            variant="persistent"
            anchor={"left"}
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
            <Divider />
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mi Perfil" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ViewModuleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mis Colecciones" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favoritos" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Amistades" />
                </ListItem>
                <ListItem onClick={()=>onCloseSession()} button>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
            </List>
      </Drawer>
    )
}

export default  withStyles(styles,{withTheme : true})(DrawerApp);