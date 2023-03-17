import {React,useEffect,useState,useContext} from 'react'
import Skeleton from 'react-loading-skeleton';
import {useParams}from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import { UseSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
import { ProContext } from "../App";




export default function Product(props) {

  const { Cart, RemoveFromCart, AddCart, isExists, } = useContext(ProContext);
//quentity
    // const dispatch=useDispatch();
    // const AddProduct=(product)=>{
    //     dispatch(AddCart(product));
    // }
    const {id}=useParams();
    // const {quentity}=useParams();

    const [product,SetProduct]=useState([]);
    const [loading,SetLoading]=useState(false);
    const [quentity,Setquentity]=useState(1);
    const [Total,SetTotal]=useState();


const Decrement=()=>{
  if(quentity<=1)return;

Setquentity(prev=>prev-1);
// SetTotal(quentity*num);

}

const Increment=()=>{

Setquentity(prev=>prev+1);
// SetTotal(quentity*num);


}



// function ChangeQuentity(event){
//     console.log(quentity);
// if(event.target.value<=1)return;
// Setquentity(event.target.value);
// console.log(quentity);
// }
  

    useEffect(()=>{
      const GetProduct=async ()=>{
        SetLoading(true);
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        SetProduct(await response.json());
        SetLoading(false);
    }
    GetProduct();
      
    },[])
    const Loading=()=>{
        return <>
       

        <div className='text-center'> 
             <div class="spinner-border" role="status" id="loading">
            <span class="sr-only"></span>
        </div>
      <p>Loading....  </p>   

        </div>
 
        <div className='col-md-6'>
            <Skeleton height={400}/>
        </div>
        <div className='col-md-6'>
            <Skeleton height={50} width={400} style={{lineHight:2}}/>
            <Skeleton height={75} />
            <Skeleton height={25}  width={150}/>
            <Skeleton height={50} />
            <Skeleton height={150} />
            <Skeleton height={50} width={100} />
            <Skeleton height={50} width={100} style={{marginLeft:6}} />



          

        </div>
        </>
    }
    const ShowProduct=()=>{
        return <>
        <div className='col-md-6'>
<img src={product.image} height="400px" width="400px"/>
        </div>
        <div className='col-md-6 text-start'>
            <h4 className='textuppercase text-black-50'>
                {product.category}
            </h4>
            <h1 className='display-5'>{product.title}</h1>
            <p className='load fw-bolder'><span className='txtcolor fw-bold'>Rating </span>{product.rating && product.rating.rate}
            <i className='fa fa-star'></i></p>
            <h3 className='display-5 txtdarkblu  fw-bold my-4'>${product.price}</h3>
            <p className='lead'>{product.description}</p>
            <div className='d-flex'>
            <button className='btn me-2 ms-2 bgdarkblu text-white' onClick={Decrement} >-</button>
            <h2>{quentity}</h2>
         
            <button className='btn me-2 ms-2 bgdarkblu text-white' onClick={Increment}>+</button>
            {/* <h3>Num:{Num}</h3> */}
            </div>
            <p><span className='txtcolor fw-bold'>Total:</span>  {quentity*product.price}</p>
            {/* <p>{Total}</p> */}

           {/* <p>alaa {props.quentity*product.price}</p> */}
            <div className='d-flex' style={{justifyContent:"space-between"}}>
    
        <button 
                    onClick={
                      isExists(product)
                        ? () => RemoveFromCart(product)
                        : () => AddCart(product)
                    }
                    className="btn bgdarkblu text-white"
                  >
                   
                    {isExists(product) ? "Remove" : "Add To Cart"}
                  </button>
                  </div>
        </div>
        </>
    }
  return (
    <div>
      <div className='container p-5'>
        <div className='row py-5'>
            {loading?<Loading/>:<ShowProduct/>}
        </div>
      </div>
    </div>
  )
}
