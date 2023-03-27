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
      <Pesrson name="Rubel" nayika="Moushumi"></Pesrson>
      <Pesrson name="BappaRaz" nayika="cheka"></Pesrson>
      <Pesrson name="Kuber" nayika="Kopila"></Pesrson>
      <h5>New component. YAY</h5>
      <p>rock mama React mama</p>
      <Friend movie="Shingam" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Pesrson(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props){
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
