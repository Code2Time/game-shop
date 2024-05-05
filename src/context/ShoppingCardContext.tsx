/*context*/
import React, { createContext, useState } from "react";

interface ShoppingCardProvider {
  children: React.ReactNode;
}

interface ShopingCardContext {
    cardItems : []
}



export const ShopingCardContext = createContext<ShopingCardContext>(
  {
    cardItems : []
  }
); /*create context*/





export function ShoppingCardProvider({ children }: ShoppingCardProvider) {

const [cardItems , setCardItems]= useState<[]>([])    

  return (
    <ShopingCardContext.Provider value={{cardItems}}>
      {children}
    </ShopingCardContext.Provider>
  );
}
