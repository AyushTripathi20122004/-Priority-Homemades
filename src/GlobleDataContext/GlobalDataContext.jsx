import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

const GlobalDataContext = ({ children }) => {

  const [OpenNav, SetNav] = useState(false)

  // Cake Data Transfer for Cake Form Section
  const [CakeData, SetData] = useState(() => {
    const savedData = localStorage.getItem("CakeData");

    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("CakeData", JSON.stringify(CakeData));
  }, [CakeData]);


  // order Data store for Order Section
  const [OrdersData, SetOrdersData] = useState(() => {
    const savedOrders = localStorage.getItem("OrdersData");

    if (!savedOrders || savedOrders === "undefined") {
      return [];
    }

    try {
      return JSON.parse(savedOrders);
    } catch (error) {
      console.error("Invalid OrdersData in localStorage:", error);
      localStorage.removeItem("OrdersData");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("OrdersData", JSON.stringify(OrdersData));
  }, [OrdersData]);

  return (
    <GlobalContext.Provider value={{ OpenNav, SetNav, CakeData, SetData, OrdersData, SetOrdersData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalDataContext
