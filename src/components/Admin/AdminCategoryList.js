import React from 'react'
import { useEffect,useState } from 'react';
import { Button } from 'react-bootstrap';

const AdminCategoryList = () => {
    const[categories,setCategory] = useState([]);
    const removeProduct = (obj,categories)=>{
        const id = obj.categoryId
        const url = "http://localhost:8080/api/categories/"+id



        fetch(url,{
          method:'DELETE',
        
        }).then(()=>{
            setCategory(categories.filter((c) => c.categoryId !== id));
        }).catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetch("http://localhost:8080/api/categories/",{
          method:'GET',
        }).then((res)=>res.json()).then(data=>setCategory(data))
          // const catId 
        },[])
 
     
        return (
            <div>
              <div className='mt-5'>
                <div className='d-flex justify-content-around'>
         
                  <h2 >CATEGORY</h2>
                  <h2>DELETE</h2>
                  <h2>UPDATE</h2>
        
                </div>
                {categories.map(c=>{
                  return(<div key={c.categoryId} className='d-flex mt-5 mb-5 justify-content-around'>
                      <div>
                        <h3>{c.categoryTitle}</h3>
                      </div>
                    
                      <div className='w-50 d-flex justify-content-around'>
                      <Button onClick = {()=>removeProduct(c,categories)}>Delete</Button>
                      <Button>Update</Button>
        
                      </div>
                  </div>)
                })}
        
              </div>
            </div>
          )
  
}

export default AdminCategoryList
