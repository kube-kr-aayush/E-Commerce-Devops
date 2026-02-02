import { assets } from "../assets/frontend_assets/assets";

export default function Footer(){

    return(
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-10 my-10 mt-30 text-sm">
                <div className="mt-5" >
                    <img src={assets.logo} alt=""  className="mb-5 w-32"/>
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam error molestias blanditiis id pariatur consequatur quod quibusdam sint et vel?
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex p-2 m-2 flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    </ul>
                </div>
                <div >
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col p-2 m-2 gap-1 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>xyz@gmail.com</li>

                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2026@ forever - All Right  Reserved</p>
            </div>
        </div>

    )
}