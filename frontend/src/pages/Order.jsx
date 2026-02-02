// import { useContext, useEffect, useState } from "react";
// import {ShopContext} from '../context/ShopContext'
// import Title from '../components/Title'
// import axios from "axios"
// export default function Order() {
//   const {backendUrl,token,currency}=useContext(ShopContext)
//   const [orderData,setOrderData]=useState([])

//   useEffect(()=>{
//     loadOrderData()

//   },[token])
//   const loadOrderData=async()=>{
//     try{
//       if(!token){
//         return null
//       }
//       const response=await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
//      if(response.data.success){
//       let allOrdersItem=[]
//       response.data.orders.map((order)=>{
        
//            order.items.map((item)=>{
//             item['status']=order.status
//             item['payment']=order.payment
//             item['paymentMethod']=order.paymentMethod
//             item['date']=order.date
//             allOrdersItem.push(item)
//           })
        

//       })
//       setOrderData(allOrdersItem.reverse())
//      }
      

//     }catch(error){

//     }
//   }
//   return (
//     <div className="border-t pt-10" style={{borderTop:"1px solid #d1d5db"}}>
//      <div className="text-2xl">
//      <Title text1={'MY'} text2={'ORDERS'}/>

//      </div>
//      <div>
//       {
//         orderData.map((item,index)=>{
//           return <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-row md:items-center md:justify-between gap-4" style={{
//   borderTop: "1px solid #d1d5db",
//   borderBottom: "1px solid #d1d5db",}}>
//             <div className="flex items-start gap-6 text-sm">
//               <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
//               <div className="[&>*]:m-0 leading-tight" >
//                 <p className="sm:text-base font-bold">{item.name}</p>
//                 <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
//                   <p>{currency}{item.price}</p>
//                   <p>Quantity : {item.quantity}</p>
//                   <p>Size: {item.size}</p>

//                 </div>
//                 <p>Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span></p>
//                 <p>Payment: <span className="text-gray-400">{item.paymentMethod}</span></p>

//               </div>

//             </div>
//             <div className="md:w-1/2 flex justify-between">
//             <div className="flex items-center gap-2">
//               <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//               <p className="text-sm md:text-base">{item.status}</p>


//             </div>
//             <button onClick={loadOrderData}  className="border px-4 py-2 text-sm font-medium rounded-sm" style={{border:"1px solid #d1d5db"}}>Track Order</button>

//             </div>

//           </div>

//         })
//       }
//      </div>
//     </div>
//   );
// }

import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

export default function Order() {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-t pt-10" style={{ borderTop: "1px solid #d1d5db" }}>
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="flex flex-col gap-6">
        {orderData.map((item, index) => {
          return (
            <div
              key={index}
              className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{
                borderTop: "1px solid #d1d5db",
                borderBottom: "1px solid #d1d5db",
              }}
            >
              {/* Left Section */}
              <div className="flex items-start gap-8 text-sm">
                <img
                  src={item.image[0]}
                  className="w-16 sm:w-20"
                  alt=""
                />

              <div className="leading-tight space-y-0">
                    <p className="sm:text-base font-bold m-0">{item.name}</p>

                    <div className="flex flex-wrap items-center gap-x-4 text-base text-gray-700 m-0">
                      <p className="m-0">
                        {currency}
                        {item.price}
                      </p>
                      <p className="m-0">Quantity: {item.quantity}</p>
                      <p className="m-0">Size: {item.size}</p>
                    </div>

                    <p className="m-0">
                      Date:{" "}
                      <span className="text-gray-400">
                        {new Date(item.date).toDateString()}
                      </span>
                    </p>

                    <p className="m-0">
                      Payment:{" "}
                      <span className="text-gray-400">
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>
              </div>

              {/* Right Section */}
              <div className="md:w-1/2 flex items-center justify-between mt-2 md:mt-0">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>

                <button
                  onClick={loadOrderData}
                  className="border px-4 py-2 text-sm font-medium rounded-sm"
                  style={{ border: "1px solid #d1d5db" }}
                >
                  Track Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
