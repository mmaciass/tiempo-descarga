import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, lightBlue, red, yellow } from '@material-ui/core/colors';
import { isDarkSchema } from '../../../utils/schema';
import Slide from '@material-ui/core/Slide';
import React from 'react';

export const themeConfig = () => createMuiTheme({
  palette: {
    primary: indigo,
    secondary: lightBlue,
    warning: yellow,
    error: red,
    type: isDarkSchema() ? 'dark' : 'light',
  },
  typography: {
    allVariants: {
      fontFamily: 'Copperplate',
    },
  },
  props: {
    MuiTextField: {
      margin: 'dense',
      variant: 'outlined',
      fullWidth: true,
    },
    MuiAppBar: {
      color: isDarkSchema() ? 'default' : 'primary',
      style: { marginBottom: 5 },
      variant: 'outlined',
    },
    MuiSelect: {
      variant: 'outlined',
    },
    MuiInputLabel: {
      margin: 'dense',
      variant: 'outlined',
    },
    MuiFormControl: {
      fullWidth: true,
      variant: 'outlined',
      margin: 'dense',
    },
    MuiList: {
      dense: true,
    },
    MuiListItem: {
      style: {
        // paddingBottom: 0,
        // paddingTop: 0,
      },
    },
    MuiIcon: {
      fontSize: 'small',
    },
    MuiIconButton: {
      color: 'inherit',
    },
    MuiAvatar: {
      style: {
        height: 30,
        width: 30,
        backgroundColor: indigo['600'],
      },
    },
    MuiListItemAvatar: {
      style: { minWidth: 35 },
    },
    MuiListItemText: {
      style: {
        marginBottom: 0,
        marginTop: 0,
      },
    },
    MuiListItemIcon: {
      style: {
        minWidth: 30,
      },
    },
    MuiSvgIcon: {
      height: 15,
      width: 15,
      color: isDarkSchema() ? 'action' : 'inherit',
    },
    MuiButton: {
      variant: 'outlined',
    },
    MuiTooltip: {
      arrow: true,
      placement: 'left',
    },
    MuiDialog: {
      TransitionComponent: props => (<Slide direction="left" {...props} />)
    },
    MuiMenu: {
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'top',
      },
    },
  },
});

