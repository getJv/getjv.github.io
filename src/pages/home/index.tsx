import bgImage from '../../assets/bg_lamp.webp';
import HomeCard from './HomeCard.tsx';

const Home = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center -mt-16"
            style={{
                backgroundImage: `url("${bgImage}")`,
                height: '100vh',
            }}
        >
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
            >
                <div className="flex h-full w-full  items-center justify-center ">
                    {<HomeCard />}
                </div>
            </div>
        </div>
    );
};
export default Home;
