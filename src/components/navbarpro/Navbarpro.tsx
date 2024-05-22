import './Navbarpro.css'
import { Fragment} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { useShopingCardContext } from '../../context/ShoppingCardContext';
import { LiaOpencart } from 'react-icons/lia';
import { SiHomebridge } from 'react-icons/si';
import { GiConsoleController, GiNewspaper } from 'react-icons/gi';
import { MdOutlinePersonOutline } from 'react-icons/md';






function Navbarpro() {
const {cartQty} = useShopingCardContext()

  return (
    <>
       <Disclosure id="nav-pro-container" as="nav" className="sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                  <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-transparent  hover:text-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                    >
                      <span>ورود</span>
                      <MdOutlinePersonOutline />
                    </NavLink>
                    <NavLink
                      to="/shop"
                      className="text-gray-300 hover:bg-transparent  hover:text-white   px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                    >
                      <span>محصولات</span>
                      <GiConsoleController />
                    </NavLink>
                    <NavLink
                      to="/"
                      className="text-gray-300 hover:bg-transparent hover:text-white  px-3 py-2 text-sm font-medium Lamia flex justify-center items-center gap-2"
                    >
                      <span>صفحه اصلی</span>
                      <SiHomebridge />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                  <NavLink to='/store'> <div className='relative'>
                 <LiaOpencart size={22} color='#eee' className='transition-all hover:-translate-y-1' />
                 {cartQty !== 0 ? <span className='z-10 absolute order-3 w-4 h-auto rounded-full bg-red-600 text-white text-center text-[10px] -top-1 -right-2'>{cartQty}</span> : ''}
                 </div></NavLink>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavLink
                to="/"
                className="text-gray-300  hover:text-white block rounded-md px-3 py-2 text-base font-medium text-center Yekan"
              >
                صفحه اصلی
              </NavLink>
              <NavLink
                to="/shop"
                className="text-gray-300 hover:bg-transparent  !block text-center hover:text-white  rounded-md px-3 py-2 text-sm font-medium Lamia"
              >
                محصولات
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   </>
  )
}

export default Navbarpro
