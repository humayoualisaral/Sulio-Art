'use client'
import { useState } from "react"

const Collection=()=>{
    const [activeMenu,setActiveMenu]=useState("Pieces")
    const [activeTab,setActiveTab]=useState("COA")
    return(
        <div className="h-screen flex">
            <div className="flex flex-col h-[100%] bg-[#F2F2F2] w-[139px] items-center">
                <button
        className={`py-[13px] px-[10px] text-[16px] w-full font-semibold ${
          activeMenu === "Pieces" ? "bg-[#D9D9D9] " : "bg-transparent"
        }`}
        onClick={() => setActiveMenu("Pieces")}
      >
        Pieces
      </button>

      <button
        className={`py-[13px] px-[10px] text-[16px] w-full font-semibold ${
          activeMenu === "Activity" ? "bg-[#D9D9D9]" : "bg-transparent"
        }`}
        onClick={() => setActiveMenu("Activity")}
      >
        Activity
      </button>
            </div>
         <div className="px-[16px] py-[24px]">
            <h2 className="text-[20px] font-semibold">{activeMenu}</h2>
           <div className="pt-[16px]">
            <button className="h-[40px] w-[120px] text-center b-solid border-[1px]">COA</button>
            <button className="h-[40px] w-[120px] text-center b-solid border-[1px]">COA draft</button>
            <button className="h-[40px] w-[120px] text-center b-solid border-[1px]">Blank canvas</button>
           </div>
         </div>
        </div>
    )
}
export default Collection