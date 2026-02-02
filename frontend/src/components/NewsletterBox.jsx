export default function NewsletterBox(){

    function onSubmitHandler(event){
        e.preventDefault(); 
    }
    return(
        <div className="text-center">
             <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, inventore!
        </p>
                  <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 mx-auto my-8 flex border " style={{ border: "1px solid #d1d5db" }}>
            <input className="w-full px-4 py-4 text-sm 
               outline-none  "  type="email" placeholder="Enter your email"  required/>
            <button type="submit" className="bg-black  text-white text-xs px-10 py-4">Subscribe</button>
        </form>
        </div>
    )
}