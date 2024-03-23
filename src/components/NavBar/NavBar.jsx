import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-black text-white p-6 flex justify-between items-center">
            <div className="text-lg md:hidden" onClick={() => setOpen(!open)}>
                {
                    open ? <IoMdClose></IoMdClose> : <IoMdMenu></IoMdMenu>
                }
                <nav className={`flex flex-col absolute duration-1000 ${open ? 'top-14' : '-top-60'}`}>
                    <NavLink className={'aria-[current=page]:text-blue-500 p-3 text-center bg-slate-600'} to={'/'}>Home</NavLink>
                    <NavLink className={'aria-[current=page]:text-blue-500 p-3 text-center bg-slate-600'} to={'/meals'}>Meals</NavLink>
                    <NavLink className={'aria-[current=page]:text-blue-500 p-3 text-center bg-slate-600'} to={'/about'}>About</NavLink>
                    <NavLink className={'aria-[current=page]:text-blue-500 p-3 text-center bg-slate-600'} to={'/contact'}>Contact</NavLink>
                </nav>
            </div>
            <h3 className="text-2xl font-semibold">Meals React Router</h3>
            <nav className="text-lg hidden md:flex gap-8">
                <NavLink className={'aria-[current=page]:text-blue-500'} to={'/'}>Home</NavLink>
                <NavLink className={'aria-[current=page]:text-blue-500'} to={'/meals'}>Meals</NavLink>
                <NavLink className={'aria-[current=page]:text-blue-500'} to={'/about'}>About</NavLink>
                <NavLink className={'aria-[current=page]:text-blue-500'} to={'/contact'}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;