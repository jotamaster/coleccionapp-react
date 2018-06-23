import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DrawerApp from './Drawer/DrawerApp';
import Content from './Content/Content'
import Header from './Header'


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  }
});

class Theme extends React.Component {
  state = {
    open: false
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes,children, theme,onCloseSession } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header open={open} handleDrawerOpen={this.handleDrawerOpen} />
          <DrawerApp 
          open={open} 
          handleDrawerClose={this.handleDrawerClose}
          onCloseSession={onCloseSession}
           />
          <Content open={open}>
            {children}
          </Content>
        </div>
      </div>
    );
  }
}

Theme.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Theme);