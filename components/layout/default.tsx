import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Mail as MailIcon, MoveToInbox as InboxIcon } from '@material-ui/icons';
import {
  CssBaseline,
  Toolbar,
  AppBar,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const listItems = [
  ['Inbox', 'Starred', 'Send email', 'Drafts'],
  ['All mail', 'Trash', 'Spam'],
];

const DefaultLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {listItems.map((group, key) => (
            <div key={key}>
              <List>
                {group.map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          ))}
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
