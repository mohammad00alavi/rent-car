"use client";

import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchBrandProps } from "@/types/SearchBrandProps";
import Image from "next/image";
import { brands } from "@/config/config";

const SearchBrand: React.FC<SearchBrandProps> = (props) => {
    const [query, setQuery] = useState("");
    const filterBrands =
        query === ""
            ? brands
            : brands.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );
    return (
        <div className="search-brand">
            <Combobox value={props.brand} onChange={props.setBrand}>
                <div className="w-full relative">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src={"/car-logo.svg"}
                            alt="car logo "
                            width={20}
                            height={20}
                            className="ml-4"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className={"search-brand__input"}
                        placeholder="Volkswagen"
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0 "
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options
                            className="search-brand__options z-20"
                            static
                        >
                            {filterBrands.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({ active }) =>
                                        `relative search-brand__option ${
                                            active
                                                ? "bg-emerald-300 text-black"
                                                : "text-gray-900"
                                        }`
                                    }
                                >
                                    {item}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchBrand;
