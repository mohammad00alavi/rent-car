import { CarBox, Filter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/fetchers/fetchCars";
import { getServerSideProps as getCarsData } from "@/fetchers/getCarsData";

export default async function Home() {
    const allCars = await fetchCars();
    const isEmptyData =
        !Array.isArray(allCars) || allCars?.length < 1 || !allCars;
    return (
        <main className="ovelflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
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
                    <section>
                        <div className="home__cars-wrapper">
                            {allCars?.map((item) => (
                                <CarBox data={item} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">
                            No cars found
                        </h2>
                    </div>
                )}
            </div>
        </main>
    );
}

/* export const getServerSideProps = getCarsData; */
