import './App.css';
import { Address } from './profilepath/address';
import { FullName } from './profilepath/fullName';
import { ProfilePhoto } from './profilepath/ProfilePhoto';
function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />

    </div>
  );
}

export default App;
