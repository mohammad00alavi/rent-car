export const mpgToLper100km = (mpg: number): number => {
    const conversionFactor = 235.21;
    const Lper100km = conversionFactor / mpg;
    return Number(Lper100km.toFixed(1));
};
