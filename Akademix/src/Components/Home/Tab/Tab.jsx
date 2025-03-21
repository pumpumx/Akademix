import React from 'react'
function Tab({name, data="Fetch_Data" , icon , color}) {

  const bgColors = {
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-300',
    purple: 'bg-purple-600',
    gray: 'bg-gray-600', 
  };

  return (
    <>
        <div className={`w-[25%] h-[100%] flex justify-between 
          rounded-xl px-3
          items-center ${bgColors[color] || "bg-blue-300"} `}>
            <div>
                <p>{name}</p>
                <p>{data}</p>
            </div>
            <span><i className={`fa-solid fa-${icon} text-2xl`}></i></span>
        </div>
    </>
  )
}

export default Tab