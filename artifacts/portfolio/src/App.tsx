import { useEffect } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={() => <div className="min-h-screen flex items-center justify-center text-white">Not Found</div>} />
      </Switch>
    </WouterRouter>
  );
}

export default App;