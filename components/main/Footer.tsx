import React from "react";


const Footer = () => {
  return (
    <div style={{zIndex:30}} className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto ">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start " style={{zIndex:30}}>
                    <div className="font-bold text-[16px]">Necrozma Labs</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <a href="https://www.necrozmalabs.com">
                        <span className="text-[15px] ml-[6px]">Visit</span>  
                        </a>  
                    </p>
                    <a href="https://www.necrozmalabs.com/#about">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    
                        <span className="text-[15px] ml-[6px]">About</span>  
                          
                    </p>
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <a href="https://www.necrozmalabs.com/#contact"> 
                        <span className="text-[15px] ml-[6px]">Contact</span>    
                        </a>
                    </p>
                </div>
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Email Us</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">abhinav@necrozmalabs.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Necrozma Labs 2024. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer