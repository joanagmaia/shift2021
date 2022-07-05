import ThemeProvider from 'context/theme/ThemeProvider';
import AppRouter from 'components/AppRouter';

const App = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
