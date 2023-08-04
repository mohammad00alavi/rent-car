"use client";
import React, { useState } from "react";
import { SearchBrand, SearchButton } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();

    const updateSearchParams = (model: string, brand: string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }
        if (brand) {
            searchParams.set("brand", brand);
        } else {
            searchParams.delete("brand");
        }
        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;
        router.push(newPathname, { scroll: false });
    };
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (brand === "" && model === "") {
            return alert("Please fill in the search bar");
        }
        updateSearchParams(model.toLowerCase(), brand.toLowerCase());
    };
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item ">
                <SearchBrand brand={brand} setBrand={setBrand} />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="BMW"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default SearchBar;
