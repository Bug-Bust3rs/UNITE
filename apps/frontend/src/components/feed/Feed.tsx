import AsideLeft from "./AsideLeft"
import MainFeed from "./MainFeed"

const Feed = () => {
    return (
        <div className="flex flex-col sm:flex-row w-auto lg:w-[80%] mx-auto pt-10 lg:pt-[100px] h-screen ">
            <AsideLeft />
            <main className="w-[80%] flex flex-col gap-10 lg:w-[60%]  mx-auto overflow-x-auto  ">
                <MainFeed />
                <MainFeed />

                <MainFeed />
                <MainFeed />

                <MainFeed />

                <MainFeed />


            </main>
            <AsideLeft />

        </div>
    )
}

export default Feed