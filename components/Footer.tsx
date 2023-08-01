import React from "react";
import { Logo } from ".";
import { footerLinks } from "@/config/config";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Logo />
                    <p className="text-base text-gray-700">
                        Rent Car <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((heading) => (
                        <div className="footer__link" key={heading.title}>
                            <h5 className="font-bold">{heading.title}</h5>
                            <ul>
                                {heading.links.map((item) => (
                                    <li key={item.title}>
                                        <Link href={item.url} className="text-gray-500">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
