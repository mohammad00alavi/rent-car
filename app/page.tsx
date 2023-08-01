import { Filter, Hero, SearchBar, } from "@/components";
import Image from "next/image";

export default function Home() {
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
            </div>
        </main>
    );
}
