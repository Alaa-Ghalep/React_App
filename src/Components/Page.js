import {React,useContext} from 'react'
import { ContainerFliud } from './Lista'
import Products from './Products'
import { ProContext } from "../App";
import Header from './Header';
import Footer2 from './Footer2';



export default function Page() {
  const { Cart} = useContext(ProContext);

  return (
    <div>
      <Header cart={Cart.length}/>
      <ContainerFliud/>
      <Products/>
      <Footer2/>
    </div>
  )
}
