import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Container from './components/Container';
function App() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
       <Container />
       </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
