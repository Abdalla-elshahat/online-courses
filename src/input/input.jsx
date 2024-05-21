import { FaChevronDown } from "react-icons/fa6";
import './input.css'
import { useState } from 'react';
function Input(){
// let [arr,setarr]=useState([{
//     id:0,
//     name:"",
//     price:0,
//     country:""
// }]);
// function create(){
//     setarr([...arr,{
//         id:arr.length,
//         name:"",
//         price:0,
//         country:""

// }])
// console.log(arr)
// }
// function delet(item){
//    setarr(arr.filter(it=>it.id!=item.id))
// }
// function update(index,e,v){
//     let list=[...arr];
//     list[index][v]=e;
//     setarr(list)
// }
//     return(
//    <>
//    <div className="contener">
//    <div className="top">
//     <div className="left" onClick={()=>{
//         document.querySelector(".left").classList.toggle("active");
//         document.querySelector(".add").classList.toggle("non");
//     }}><FaChevronDown /></div>
//     <div className="right">Abdalla</div>
//    </div>
//     <div className="add non">
//     <div className="pls" onClick={()=>create()}>+</div>
//     {arr.map((item,index)=>{
//         return(
//         <div className="two" key={item.id}>
//         <input type="text" placeholder='enter your name' value={item.name} onChange={(e)=>update(index,e.target.value,"name")}/>
//         <input type="price" placeholder='enter your price' value={item.age} onChange={(e)=>update(index,e.target.value,"price")}/>
//         <input type="text" placeholder='enter your country' value={item.country} onChange={(e)=>update(index,e.target.value,"country")}/>
//        {item.id!=0&& <div className="btn" onClick={()=>delet(item)}>X</div>
//     }
//         </div>
//         )
//     })}
//    </div>
//     </div>
//     </>
// )


// let [pro,setpro]=useState([
//     {id:1,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:2,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:3,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:4,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:5,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:6,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"},
//     {id:7,name:"Abdalla",age:"20",salary:"2453",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e3KLGUVcJAFelLD2zXD_KhYa7YKfifek8WIqmCWu8Q&s",title:"talat"}
// ]);
// let [show,setshow]=useState(false);
// let [ob,setob]=useState({});
// function View(e){
// setob(e);
// setshow(true);
// }
//    return(<>
//    <div className="contener">
//     <table>
//         <thead>
//         <tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>age</th>
//             <th>salary</th>
//             <th>imag</th>
//             <th>title</th>
//             <th>view</th>
//         </tr>
//         </thead>
//     <tbody>
// {pro.map((e)=>{
//     return(
//     <tr key={e.id}>
//         <td>{e.id}</td>
//         <td>{e.name}</td>
//         <td>{e.age}</td>
//         <td>{e.salary}</td>
//         <td>{<img src={e.img} width={"100px"} height={"100px"} alt=""/>}</td>
//         <td>{e.title}</td>
//         <td><button onClick={()=>View(e)}>View</button></td>
//     </tr>
//     )
// })}
//     </tbody>
//     </table>
//    </div>
 
// {
//  show&&<div className="finsh">
//     <div className="big">
        
//     <span onClick={()=>{
//         setshow(false)
//         setob({})}
//         }>CLose</span>
//     <ul>
//     <li>{ob.id}</li>
//  <li>{ob.name}</li>
//  <li>{ob.age}</li>
//    <li>{ob.salary}</li>
//    <li>{<img src={ob.img} width={"100px"} height={"100px"} alt=""/>}</li>
//   <li>{ob.title}</li>
//     </ul>
// </div>
// </div>
// }
//    </>)
let[state,setstate]=useState([
    {
        id:0,
        name:'',
        age:0
    }
]

)
function create(){
    setstate([...state,{
        id:state.length,
        name:'',
        age:''
    }]
    )
}
function deletee(e){
    setstate(state.filter(it=>it.id!=e))
};
function update(index,e,v){
let list=[...state];
list[index][v]=e;
setstate(list);
}
return(
    <>
    <span onClick={()=>create()}>+</span>
  {
    state.map((e,index)=>{
        return(
        <div className="two" key={e.id}>
        <input type="text" placeholder="entername" value={e.name} onChange={(a)=>update(index,a.target.value,"name")} />
        <input type="age" placeholder="enterage" value={e.age} onChange={(a)=>update(index,a.target.value,"age")} />
        {e.id!=0&& <div className="btn" onClick={()=>deletee(e.id)}>X</div>}
    </div>
        )
    })
  }  
    </>
)
}
export default Input;
