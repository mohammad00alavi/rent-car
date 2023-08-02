import getConfig from "next/config";

export const fetchCars = async () => {
    /* const { publicRuntimeConfig } = getConfig(); */
    const URL = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "78992739ffmsh282624d174d2e23p1e4934jsn6f53aae9ca7d",
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
