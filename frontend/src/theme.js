import { createTheme } from '@mui/material/styles';
import { height } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BF0202'
    }
  },

  typography: {
    msg_issue: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    msg_body: {
      fontSize: 16,
    },
    msg_sender: {
      fontSize: 14,
      fontWeight: 'bold',
      // Break words
      wordBreak: 'break-all',

    },
    msg_receiver: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    msg_date: {
      fontSize: 14,
    },
  },

});

export default theme;