import { useState } from "react"

export default function LandingPage() {

    const [mobilemenu, setmobilemenu] = useState(false);

    const toggle = () => {
        setmobilemenu(!mobilemenu);
    }

  return (
    <div className="landingpage">

            <div className="herosection p-4 md:p-5">
                
                <nav className="flex justify-between bg-white shadow-md rounded-sm p-2 gap-2 md:p-4">
                   
                    <img src="../../Facebook.png"></img>

                    <ul className="hidden lg:flex md:gap-10 gap-2 justify-between font-kufam items-center">
                        <li>Products</li>
                        <li>Solution</li>
                        <li>Industries</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>

                    <div className="lg:hidden w-[44px] relative" onClick={toggle}><img src="../../menu.png" ></img></div>

                    {mobilemenu && (
                        <ul className="bg-white flex flex-col gap-2 p-2 rounded-md font-kufam text-2xl shadow-xl absolute top-20 right-0">
                                <li>Products</li>
                                <li>Solution</li>
                                <li>Industries</li>
                                <li>Pricing</li>
                                <li>Resources</li>
                                <button className="p-2 rounded-md text-white">Book a Demo</button>
                        </ul>
                    )}
                    <button className="hidden lg:flex p-2 rounded-md text-white">Book a Demo</button>
                
                </nav>

                        <div className="flex flex-col lg:flex-row justify-between mt-10 gap-4 lg:gap-0">
                               <div className="flex flex-col gap-10 justify-center">

                                    <div className="flex gap-2 p-2 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-700 rounded-sm md:w-[386px]">
                                        <div className="bg-[#D9D9D9] w-[20px] h-[24px]"></div>
                                        <h3 className="text-white tracking-wider font-400">LEADS MANAGEMENT</h3>
                                    </div>
                                    
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[#3B3A5D] text-6xl line-height-[77.02px]">Welcome to your</p>
                                            <p className="text-[#407BFF] text-6xl line-height-[77.02px]"> Facebook.</p>
                                        </div>
                                            <p className="text-[#555555] text-lg">Far far away, behind the word mountains, far from the countries<br/>
                                                 Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>

                                    <div className="flex gap-2 bg-[#534AEC] items-center w-[185px] h-[72px] rounded-md">
                                        <buttton className="text-white p-2 px-3">Try it Now</buttton>
                                        <img src="../../Vector.png" className="w-[17px] h-[16px]"></img>
                                    </div>
                                
                               </div>
                              
                            <img src="../../Image-1.png"></img>
                         
                        </div>

            </div>

            <div className="contentsection p-4 md:p-5">
                <h1 className="text-[#407BFF] lg:text-5xl text-3xl font-semibold text-center">Why Choose Our Wxyz <br/>Management Software</h1>

                <div className="contentdetails">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        <img src="../../Mask group.png" className="w-[361px]"></img>
                    </div>

                    <div className="flex justify-between items-center">
                        <img src="../../piggy.png" className="w-[361px]"></img>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        <img src="../../Group 59.png" className="w-[361px]"></img>
                    </div>

                    <div className="flex justify-between items-center">
                        <img src="../../Group 10.png" className="w-[361px]"></img>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        <img src="../../Group 9.png" className="w-[361px]"></img>
                    </div>

                    <div className="flex justify-between items-center">

                        <img src="../../Frame.png" className="w-[361px]"></img>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-[40px] text-[#407BFF]">Teamwork Made Easier</h3>
                            <p className="text-slate-600">Neque porro quisquam est qui dolorem ipsum quia <br/> dolor sit amet, consectetur, adipisci velit Neque porro<br/> quisquam est qui dolorem ipsum quia dolor sit amet, <br/>consectetur, adipisci velit</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="flex gap-2 bg-[#534AEC] items-center w-[185px] h-[72px] rounded-md my-5 mx-auto">
                <buttton className="text-white p-2 px-3">Try it Now</buttton>
                <img src="../../Vector.png" className="w-[17px] h-[16px]"></img>
             </div>
    </div>
  )
}
