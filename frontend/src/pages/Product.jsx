import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets, products } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProduct";

export default function Product() {
  const {productId}=useParams();
  // console.log(productId);
  const {products,currency,addToCart}=useContext(ShopContext)
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState("");
  const [size,setSize]=useState("")

  const fetchProductData=async()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item);
        
        return null;
      }
    })

  }
  
useEffect(()=>{
  fetchProductData();
},[productId,products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100" style={{
    borderTop: "2px solid black",   // border-t-2
    paddingTop: "2.5rem",           // pt-10 (10 × 0.25rem)
    opacity: 1,                     // opacity-100
    transitionProperty: "opacity",  // transition-opacity
    transitionTimingFunction: "ease-in", // ease-in
    transitionDuration: "500ms",    // duration-500
  }}>
      {/* productdata */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row" >
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
           {
            productData.image.map((item,index)=>{
             return  <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shirnk" alt="" />
            })
           }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />

          </div>

        </div>
        {/* product info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-1"   style={{
    fontWeight: 600,        // font-medium
    fontSize: "1.5rem",     // text-2xl
    marginTop: "0.5rem",    // mt-2 (2 × 0.25rem)
  }}>{productData.name}</h1>
          <div className="flex items-center flex items-center gap-1 mt-0.5"style={{margin:"0.25rem"}}>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>

          </div>
          <p className="mt-2 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
           <div className="flex flex-col gap-4 my-8">
            <p>Select-Size</p>
            <div className="flex gap-2">
             {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className="py-2 px-4 bg-gray-100"
                  style={{
                    border: `1px solid ${item === size ? "#f97316" : "#f3f4f6"}`,
                  }}
                >
                  {item}
                </button>
              ))}

            </div>

           </div>
           <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
           <hr className="mt-8 sm:w-4/5"/>
           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="m-0.5">100% Original product.</p>
            <p className="m-0.5">Cash on delivery is available on this product.</p>
            <p className="m-0.5">Easy return and exchange policy within 7 days.</p>

           </div>
        </div>

      </div>
      {/* Description & Review section */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm " style={{
  border: "1px solid #e5e7eb",
  fontWeight: "bold"
}}>Description</p>
          <p className="border px-5 py-3 text-sm" style={{
  border: " 1px solid #e5e7eb " 
}}>Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-1 border px-6 py-6 text-sm text-gray-500" style={{ border: " 1px solid #e5e7eb " }}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptatibus, voluptatum, consequuntur nobis minima eos et corrupti tempora ex porro obcaecati laborum facilis praesentium laboriosam quidem laudantium vel iusto quis.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga doloremque ad possimus harum, autem in, perspiciatis ducimus voluptas, saepe nobis laborum quis quos iusto perferendis debitis vitae obcaecati. Perferendis laudantium distinctio eligendi soluta dolorum alias aliquid, natus voluptatibus qui dolor?</p>

        </div>
      </div>

      {/* related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

      
    </div>) : <div className="opacity-0">

    </div>
  ;

}