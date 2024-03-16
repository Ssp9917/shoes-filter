import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
// import { useRef } from 'react'
const Product = ({product,category,color}) => {
    const [company,setCompany] = useState('All')

    // company filter
    if(company!="All"){
        product = product.filter(
            (prod)=>{
                if(prod.company == company){
                    return true
                }else{
                    return false
                }
            }
        )
    }else{
        product = product.map(
            (d)=>{
                return d
            }
        ) 
    }
    
    // search filter

    const [search,setSearch] = useState('')
    // console.log(search);


    if(search != ''){
        product = product.filter(
            (prod)=>{
                return Object.values(prod)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
            }
        )

    }

    // company filter


    // category filter
    
        if(category != 'All'){
            product = product.filter(
                (d)=>{
                     if(d.category == category){
                         return true
                     }else{
                         return false
                     }
                 }
             )
        }else{
            product = product.map(
                (d)=>{
                    return d
                 }
             )
        }

    // color filter
    if(color != "All"){
        product = product.filter(
            (d)=>{
                if(d.color == color){
                    return true
                }else{
                    return false
                }
            }
        )
    }else{
        product = product.map(
            (d)=>{
                return d
             }
         )
    }
       
  return (
    <div className="col-10 border border-primary">

        <div>
             <Form.Control type="text" placeholder="Search Products"  className='mt-2' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <div> 
            <h3 className='m-2 '>Recommended</h3>
            <div className='d-flex list-unstyled gap-4 ms-2'>
                <li className='shadow p-1 text-danger' onClick={()=>setCompany("All")}>All Product</li>
                <li className='shadow p-1 text-danger' onClick={()=>setCompany("Nike")}>Nike</li>
                <li className='shadow p-1 text-danger' onClick={()=>setCompany("Adidas")}>Adidas</li>
                <li className='shadow p-1 text-danger' onClick={()=>setCompany("Puma")}>Puma</li>
                <li className='shadow p-1 text-danger' onClick={()=>setCompany("Vans")}>Vans</li>
            </div>
        </div>

        <h1 className='text-center text-primary pb-3 mt-3'>{category} Product</h1>
        <div className='d-flex flex-wrap gap-4 ps-4'>
            {
            product.map(
                (d,i)=>{
                    return <Box title={d.title} image={d.img} key={i} prev_price={d.prevPrice} new_price={d.newPrice} company={d.company} color={d.color}/>
                }
            )
            }
        </div>
    </div>
  )
}

function Box({title,image,prev_price,new_price,company,color}){
    
   return (
    <div className='col-3 shadow' style={{width:"200px"}}>
    <img src={image} alt="" className='img-fluid ps-2' style={{height:'100px'}}/>
    <p className='pt-2 ps-2'>{title}</p>
    <div className='text-primary'>New Price ${new_price}</div>
    <div className='text-danger' >Old Price <span style={{textDecoration:"line-through"}}>{prev_price}</span> </div>
    <div className='text-primary' >Company - {company} </div>
    <div className='text-danger' >Color - {color} </div>
   
    </div>
   )
}

export default Product