import React, { useState } from 'react';
import "./styles.css";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";
import Menu from "./menuApi.js";


const uniqueList = [
  ...new Set(Menu.map((curElem) => {
     return curElem.category;

  })),
  "All",
];


const RestaurantHome = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if(category ==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList)

  }

 
  return (
    <>
      <Navbar filterItem={filterItem} menuList= {menuList}/>
      <MenuCard menuData={menuData}/>
    </>
    
  )
}

export default RestaurantHome;