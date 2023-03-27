import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'Singer' }
const singer2 = { name: 'Eva Rahman', job: 'Singer2' }

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Pesrson></Pesrson>
      <Pesrson></Pesrson>
      <Pesrson></Pesrson>
      <Pesrson></Pesrson>
      <h5>New component. YAY</h5>
      <p>rock mama React mama</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Pesrson() {
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  );
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: maramari</p>
    </div>
  );
}

export default App;
