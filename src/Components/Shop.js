import {React,useContext} from 'react'
import bgshop from '../images/bgshop.jpg';
import {Link} from 'react-router-dom';
import Products from './Products';
import ShowProducts from'./Products';
import Header from './Header';
import { ProContext } from "../App";
import Footer2 from './Footer2';



export default function Shop() {
  const { Cart } = useContext(ProContext);

  return (
    <div>
      <Header cart={Cart.length}/>
      <ShopContainer/>
      <ShowProducts/>
<Footer2/>


    </div>
  )
}


export  function ShopContainer() {
  return (
    <div>
      <div className='container-fliud' style={{backgroundImage:`Url(${bgshop})`,backgroundSize:"cover"}}>
        <div className='container'>
        <div className='row mb-4 ' style={{paddingBottom:"70px"}}>
          <div className='col-lg-5 ' style={{paddingTop:"150px"}}>
            <h1 className='txtcolor fw-bold' style={{fontSize:"80px",fontFamily:"-moz-initial"}}>Sale 20% Off</h1>
            <h1 className='txtdarkblu fw-bold' style={{fontSize:"66px",fontFamily:"-moz-initial"}}>
On Everything
</h1>
<p className='mt-4'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
           
<div class="mt-5 mb-5 translate rounded ">
     <Link class="animated fadeInUp p-4 px-5 rounded  text-white text-decoration-none bgcolor2 " to="/Shop">Show Products</Link>
                                    </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
