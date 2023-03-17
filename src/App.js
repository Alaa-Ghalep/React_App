import logo from './logo.svg';
import './App.css';

import { Route, Switch,Routes } from 'react-router-dom';
import Home from './Components/Home';
import ConcateUs from './Components/ConcateUs';
import { useState ,createContext,useEffect} from 'react';
import CartPAge from './Components/Cart';
import SignIn from './Components/auth/SignIn';
import { useNavigate } from "react-router-dom";
import Registeralaa from './Components//Alaaaaaaa/Registeralaa';
import Shop from './Components/Shop';
import Section2 from './Components/Section2';
import Buy from './Components/Buy';
import imgg from './images/img.jpg';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';
import img16 from './images/img16.png';
import img17 from './images/img17.jpg';
import Products from './Components/Products';
import Product from './Components/Product';
// import Section5 from './Components/Section5';
import Payment from './Components/Payment';
import Page from './Components/Page';
// import 'swiper/css';
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';

export const ProContext = createContext();

function App() {

//   var swiper = new Swiper(".mySwiper", {
//     effect: "cards",
//     grabCursor: true,
// });

  const navigate = useNavigate();
  const user = localStorage.getItem("authToken");
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
       navigate("/login");
    
  }, []);

  const [Cart, SetCart] = useState([]);
const [quentity,Setquentity]=useState(1);
const [Num,SetNum]=useState();


const Decrement=()=>{
  if(quentity<=1)return;

Setquentity(prev=>prev-1);
SetNum(quentity);


}

const Increment=()=>{

Setquentity(prev=>prev+1);
SetNum(quentity);


}


  //button Add

  
const onAdd=(product)=>{
  // const exist=Cart.find((x)=>x.id===product.id);
  // if(exist){
  //   SetCart(Cart.map((x)=>x.id===product.id ?{...exist,quentity:exist.quentity+1} :x))
  // }
  // else {SetCart([...Cart,{...product,quentity:1}])}


  Cart.map((item)=>
  {  if( item.id===product.id)
    {SetCart([...Cart,{...product,quentity:7}])} }

);
  }

  const AddCart = (pro) => {
    SetCart([...Cart, { ...pro }]);
    console.log("Added");
  };

  const isExists = (prod) => {
    // console.log(Cart.some((value) => value.id === prod.id));
    return Cart.some((value) => value.id === prod.id);
  };

  const RemoveFromCart = (product) => {
    SetCart(Cart.filter((pro) => pro.id !== product.id));
  };
  return (
<div>

<ProContext.Provider value={{ Cart, RemoveFromCart, AddCart, isExists ,onAdd,quentity,Decrement,Increment,Num}}>

    <div className="App">


<Routes>
  
  {/* <Route path='/' element={<Lista/>}></Route> */}
  <Route path='/' element={<Page/>}></Route>


  <Route path='/register' element={<Registeralaa/>}></Route>
  <Route path='/login' element={<SignIn/>}></Route>
  {/* <Route path='/login' element={<Login/>}></Route> */}

  <Route path="/Cart" element={<CartPAge/>}></Route> 
  <Route path="/Shop" element={<Shop/>}></Route> 
  <Route path="/ConcateUs" element={<ConcateUs/>}></Route> 
  <Route path="/Section2" element={<Section2/>}></Route> 
  <Route path="/Buy" element={<Payment/>}></Route> 
  {/* <Route path="/Buy" element={<Buy/>}></Route>  */}
  <Route path="/Product/:id" element={<Product/>}></Route>
  {/* <Route path="/Products" element={<Products/>}></Route> */}






  



       </Routes>
   
    </div>
    </ProContext.Provider>
    </div>
  );

}
export default App;
