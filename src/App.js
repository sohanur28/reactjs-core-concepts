import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaRazDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Pesrson name={nayok}></Pesrson>)
      } */}
      
      {
        singers.map(singer => <Pesrson name={singer.name}></Pesrson>)
      }

      {/* <Pesrson name={nayoks[0]} nayika="Moushumi"></Pesrson>
      <Pesrson name={nayoks[1]} nayika="cheka"></Pesrson>
      <Pesrson name={nayoks[2]} nayika="Kopila"></Pesrson> */}
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
      <p>{props.nayika}</p>
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
