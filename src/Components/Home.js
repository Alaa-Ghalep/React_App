// import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import Footer from './Footer';
import Footer2 from './Footer2';
import Header from './Header';
import Register from './Register';
import { Route, Switch } from 'react-router-dom';
import Slider from './Slider';
import Lista, { ContainerFliud } from './Lista';


export default function Home() {
  return (
    <div>
            {/* <h1>Home</h1> */}
<ContainerFliud/>
      <Slider/>
      <Lista/>

    </div>
  )
}
