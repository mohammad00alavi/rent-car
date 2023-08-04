import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components";
import { updateSearchParams } from "@/utils/updateSearchParams";

interface ShowMoreProps {
    pageNumber: number;
    isNextPage: boolean;
}

const ShowMore: React.FC<ShowMoreProps> = ({ pageNumber, isNextPage }) => {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathname, { scroll: false });
    };
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNextPage && (
                <Button
                    title="Show More"
                    disabled={false}
                    type={"button"}
                    innerStyles={"bg-emerald-300 rounded-full text-black"}
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;
