import Image from "next/image";
import React from "react";

interface SearchButtonProps {
    otherClasses: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ otherClasses }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image
                src={"/magnifying-glass.svg"}
                alt="search icon"
                width={40}
                height={40}
                className="object-contain"
            />
            SearchButton
        </button>
    );
};

export default SearchButton;
