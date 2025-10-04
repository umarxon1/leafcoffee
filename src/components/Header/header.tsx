"use client"
import {MenuOutlined, PhoneOutlined } from "@ant-design/icons"
import { Drawer, Button, Menu } from "antd";
import { useEffect, useState } from "react";
import Logo from "../../../public/logo.png"
import Image from "next/image";

const items= [
  {
    label: "  Главная",
    key: '0',
  },
  {
    label:"Меню",
    key: '1',
  },
  {
    label: 'О компании',
    key: '3',
  },
  {
    label: 'Рестораны',
    key: '4',
  },
  {
    label: 'Контакты',
    key: '5',
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
      <div>
      <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400 ${scrolled ? "bg-[#b5d8d2] shadow-md" : "bg-transparent text-white"}`}> 
     <header className="container">
      <nav className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-25 max-xl1:gap-10">
          <Image src={Logo} alt="Logo" width={300} height={70} className={` max-sm1:max-w-[140px] cursor-pointer object-contain h-[40px] transform-transition ease-in duration-260 ${scrolled ? "w-[220px]":"w-[300px] h-[70px]" }`}/>
              <ul className={`flex gap-5 font-[16px] max-md1:hidden ${scrolled ? "text-gray-700" : "text-white" }`}>
                <li className="hover:text-white cursor-pointer">
                  Main
                </li>
                <li className="hover:text-white cursor-pointer">
                  Menu
                </li>
                <li className="hover:text-white cursor-pointer">
                  About us
                </li>
                <li className="hover:text-white cursor-pointer">
                  Restaurants
                </li>
                <li className="hover:text-white cursor-pointer">
                  Contacts
                </li>
              </ul>
        </div>
              <div className="flex items-center gap-2  max-xl:gap-10">
             <div className="max-lg1:hidden">
               <PhoneOutlined style={{fontSize:"26px"}}/> 
             </div>
                <div className="flex items-center flex-col max-lg1:hidden ">
                <a href="tel:+998885770077" className={`font-medium text-[16px] text-gray-700 hover:text-white ${scrolled ? "text-gray-700" : "text-white"}`}>+998 88 577-00-77</a>
                <span className={`text-[12px] text-gray-700  ${scrolled ? "text-gray-700" : "text-white"}`}>кругластучно 24/7</span>
              </div>
               <div className="hidden max-md1:inline ">
                <Button
        type="text"
        icon={<MenuOutlined style={{fontSize:"22px", color: scrolled ? "gray" : "white",}} />}
        onClick={() => setOpen(true)}
      />
       <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={220}
      >
        <Menu style={{width:"200px"}} mode="vertical" items={items} />
      </Drawer>
               </div>
              </div>
            </nav>
    </header>
    </div>
   
   </div>
  )

}

export default Header