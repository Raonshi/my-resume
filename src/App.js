import { Button, createTheme, Typography } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/side/SideBar';

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        }
      }
    }
  }
});

export default App;
