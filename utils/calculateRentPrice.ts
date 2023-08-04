export const calculateRentPrice = (city_mpg: number, year: number): string => {
    const basePricePerDay = 50; // Original base rental price per day in dollars
    const mileageFactor = 0.1; // Original additional rate per mile driven
    const ageFactor = 0.05; // Original additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor; // Calculate the additional rate based on the city miles per gallon and mileage factor
    const ageRate = (new Date().getFullYear() - year) * ageFactor; // Calculate the additional rate based on the vehicle's age

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate; // Calculate the total rental rate per day including all additional factors

    return rentalRatePerDay.toFixed(0); // Return the rental rate per day as a rounded value
};
