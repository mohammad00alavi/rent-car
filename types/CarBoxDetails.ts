import { Car } from "./Car";

type CarBoxElementsConfig = ["transmission", "city_mpg", "drive"];

type CarFactoryType<T, K extends keyof T> = Pick<T, K>;

export type CarBoxElements = CarFactoryType<Car, CarBoxElementsConfig[number]>;
