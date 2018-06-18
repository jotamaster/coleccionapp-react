import React from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
    content: {
        marginTop : 30,
        height : '100vh',
        overflow : 'auto',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: -drawerWidth
      }
})
const Content = props => {
    const {classes,open,children } = props;
    return (
        <main
        className={ classNames(classes.content, {
          [classes.contentShift]: !open
        })}
      >
      {children}
      </main>
    )
}

export default  withStyles(styles)(Content);