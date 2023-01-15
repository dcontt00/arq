import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    background: {
      paper: "#BBDEFB",
    },
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