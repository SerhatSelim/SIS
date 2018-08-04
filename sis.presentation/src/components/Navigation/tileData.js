import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Person from '@material-ui/icons/Person';
import ReportIcon from '@material-ui/icons/Report';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooks />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryAdd />
      </ListItemIcon>
      <ListItemText primary="Add Courses" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryAdd />
      </ListItemIcon>
      <ListItemText primary="Add Courses by Staff" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalendarToday />
      </ListItemIcon>
      <ListItemText primary="Exams" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumbered />
      </ListItemIcon>
      <ListItemText primary="Grades" />
    </ListItem>
  </div>
);

export const otherListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Info" />
    </ListItem>
  </div>
);
