import { CustomHooksArgs } from "@/types/CustomHooksArgs";
import { useAppContext } from "./useAppContext";
import { AppContextProps } from "@/types/AppContextProps";
import { Car } from "@/types/Car";

const useCars = (): AppContextProps => {
    const { carData } = useAppContext<AppContextProps>();
    return { carData };
};

export default useCars;
