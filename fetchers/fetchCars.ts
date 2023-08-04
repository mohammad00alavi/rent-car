import { FilterProps } from "@/types/FilterProps";

export const fetchCars = async (filters: FilterProps) => {
    const { brand, year, model, limit, fuel } = filters;
    const URL = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${brand}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CAR_API_KEY || "",
            "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
    };
    try {
        const response = await fetch(URL, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error("Network error, please try again later.");
    }
};
