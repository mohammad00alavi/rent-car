import getConfig from "next/config";

export const fetchCars = async () => {
    const URL = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry`;
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
        /* return {
            imgSrc: picture.urls.raw + "&w=1920&h=1080",
            description: picture.description,
            color: picture.color,
        }; */
    } catch (error) {
        throw new Error("Network error, please try again later.");
    }
};
