import { Filter, Hero, SearchBar } from "@/components";
import CarsBoard from "@/elements/CarBoardElements/CarsBoard";
import { fetchCars } from "@/fetchers/fetchCars";
import { getServerSideProps as getCarsData } from "@/fetchers/getCarsData";
import Provider from "@/providers/Provider";
import { AppContextProps } from "@/types/AppContextProps";

export default async function Home() {
    const carData = await fetchCars();
    const isEmptyData =
        !Array.isArray(carData) || carData?.length < 1 || !carData;
    return (
        <main className="ovelflow-hidden">
            <Hero />
            <Provider<AppContextProps> appProps={carData}>
                <div
                    className="mt-12 padding-x padding-y max-width"
                    id="discover"
                >
                    <div className="home__text-container">
                        <h1 className="text-4xl font-extrabold">
                            Discover our cars
                        </h1>
                        <p>Check your favorite cars</p>
                    </div>
                    <div className="home__filters">
                        <SearchBar />
                        <div className="home__filter-container">
                            <Filter title="fuel" />
                            <Filter title="year" />
                        </div>
                    </div>
                    {!isEmptyData ? (
                        <CarsBoard />
                    ) : (
                        <div className="home__error-container">
                            <h2 className="text-black text-xl font-bold">
                                No cars found
                            </h2>
                        </div>
                    )}
                </div>
            </Provider>
        </main>
    );
}
/* export const getServerSideProps = getCarsData; */
