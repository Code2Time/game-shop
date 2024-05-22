/*context*/
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";





interface ShoppingCardProvider {
  children: React.ReactNode;
}

interface carditem {
  id : number ,
  qty : number             /*qty = count cart item */
}

interface ShopingCardContext {
    cardItems : carditem[],
    HandleIncreaseProductQty : (id : number)=> void,
    HandleDecreaseProductQty : (id : number)=> void,
    HandleRemoveProduct : (id : number)=> void ,
    GetProductQty : (id : number)=> number,
    cartQty : number
}



export const ShopingCardContext = createContext({} as ShopingCardContext );     /*create context*/


export const useShopingCardContext = () => {
return useContext(ShopingCardContext)
} 


export function ShoppingCardProvider({ children }: ShoppingCardProvider) {     /* a layout component for use context! */


const [cardItems , setCardItems]= useLocalStorage<carditem[]>('CartItems' ,[])                    /*an array for products */

const HandleIncreaseProductQty = (id : number) =>{                    
  setCardItems(currentItems => {                                             /*get last update*/
   let selectedItem = currentItems.find(item => item.id == id)               /*find product */
    if(selectedItem == null){
    return[...cardItems , {id : id , qty : 1}];                               /*return all products + new target */
   }
   else{
    return currentItems.map(item =>{
     if (item.id == id) {
      return {...item , qty : item.qty +1}
     }
     else{
      return item
     }
    })
   }
  });
};

const HandleDecreaseProductQty = (id : number) =>{
  setCardItems(currentItems =>{
    let selectedItem = currentItems.find(item => item.id == id)              /*get last update*/
    if(selectedItem?.qty == 1){
      return currentItems.filter(item => item.id !== id)                     /*return every products - target */
    }  else{
      return currentItems.map((item) =>{
       if (item.id == id) {
        return {...item , qty : item.qty - 1}
       }
       else{
        return item
       }
      })
     }
  })
}


const HandleRemoveProduct = (id : number) => {
  setCardItems(currentItems => currentItems.filter(item => item.id != id))
}

const cartQty = cardItems.reduce( (totalQty , item) => totalQty + item.qty , 0)     /*get selected products Qty */



const GetProductQty = (id : number)=>{                                /* for show qty product */
  return cardItems.find(item => item.id == id)?.qty || 0    
}

  return (
    <ShopingCardContext.Provider value={{ HandleRemoveProduct , cartQty , cardItems , HandleIncreaseProductQty , HandleDecreaseProductQty ,GetProductQty}}>
      {children}
    </ShopingCardContext.Provider>
  );
}
