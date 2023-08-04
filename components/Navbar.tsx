import React from "react";
import Link from "next/link";
import { Button } from ".";
import { Logo } from ".";

const Navbar = () => {
    return (
        <header className="p-4 w-full z-20 absolute">
            <nav className="max-w-[1440px] mx-auto flex items-center justify-between sm:px-14 px-6- py-4">
                <Link className="flex justify-center items-center" href={"/"}>
                    <Logo />
                </Link>
                <Button
                    title="Sign In"
                    disabled={false}
                    type="button"
                    innerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
            </nav>
        </header>
    );
};

export default Navbar;
