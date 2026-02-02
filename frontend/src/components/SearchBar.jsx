import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/frontend_assets/assets"
import { useLocation } from "react-router-dom"

export default function SearchBar(){
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const location=useLocation();
    // const [visible,setVisible]=useState(false)

    // useEffect(()=>{
    // if(location.pathname.includes("collection") ){
    //         setVisible(true)
    // }else{
    //     setVisible(false)
    // }

    // },[location])

    return showSearch  ? (
        <div className="border-t border-b bg-gray-50 text-center" style={{
  borderTop: "1px solid black",
  borderBottom: "1px solid black"
}}>
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2" style={{
  border: "1px solid #9ca3af"
}} >
            <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" style={{
  outline: "none",
  border:"none"
}} />
            <img src={assets.search_icon} alt="" className="w-4" />
            </div>
            <img src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer " onClick={()=>setShowSearch(false)} />

        </div>
    ):null

}