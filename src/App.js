import './App.css';
import { WelcomeH3 } from './Welcome';

function App() {
  return (
    <div className="App">
      <WelcomeH3 children="Welcome H3"/>
      <WelcomeH3 children="Selamat Datang H3"/>
      <WelcomeH3> Aku adalah content </WelcomeH3>
    </div>
  );
}

export default App;
