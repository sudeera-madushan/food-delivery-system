import HomeMap from "../components/map/homeMap.tsx";

type Props = {
    apikey:string
};

export function Home(props: Props) {
    return (
        <section>
            <div>
                <img className={'w-[35vw] mt-12 absolute right-24 max-[856px]:block max-[856px]:mt-80'} src="./../../src/assets/home/home-image.png" alt="rice"/>
                {/*<img className={'w-[13vw] mt-[25vw] absolute right-[33vw]'} src="./../../src/assets/home/chips.png" alt="rice"/>*/}
                {/*<img className={'w-[15vw] mt-[12vw] absolute right-[36vw]'} src="./../../src/assets/home/salad.png" alt="rice"/>*/}
                {/*<img className={'w-[10vw] mt-[1.8vw] absolute right-[34vw]'} src="./../../src/assets/home/bun.png" alt="rice"/>*/}
            </div>
            <div className={'mt-12 p-10 max-w-[50vw] max-[856px]:max-w-[100vw] max-[856px]:mt-0'}>
                <h1 className={'font-[Agbalumo] text-5xl max-w-[600px] max-[856px]:max-w-[100vw] text-center text-[var(--secondary-color)] mt-10'}>
                    Welcome to
                    <strong className={'text-6xl ml-1 text-[var(--primary-color)]'}>
                        FoodSwift
                    </strong>
                    <br/>
                </h1>
                <p className={'max-w-[45vw] mt-5 text-justify text-gray-600 text-lg max-[856px]:max-w-[100vw]'}>Discover the joy of hassle-free dining with FoodSwift. Order from your favorite local restaurants or
                    explore exciting new flavors—all at your fingertips. Swift delivery, curated recommendations,
                    and exclusive promotions await. Your culinary adventure begins here.
                </p>
            </div>
                <h1 className={'font-concert-one mt-24 ml-10 text-7xl text-[var(--primary-color)] max-[856px]:w-36 max-[856px]:mt-2  '}>Swift, Savor, Repeat!</h1>
            <div className={'w-full h-[500px] px-20 mt-20 mb-32  max-[856px]:px-10'}>

                {/*<HomeMap key={props.apikey} />*/}
                {/*<MapLocation key={props.apikey}/>*/}
            </div>
        </section>
    );
};
export default Home;
