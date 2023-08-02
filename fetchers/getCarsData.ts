import { GetServerSidePropsContext } from "next";
import { fetchCars } from "./fetchCars";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const brand = context.params?.brand as string;
    const response = await fetchCars();
}
