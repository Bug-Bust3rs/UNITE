import AsideLeft from "./AsideLeft"
import { FeedPost } from "./Feed-post"
import MainFeed from "./MainFeed"

const Feed = () => {
    return (

        <div className="flex flex-col-reverse items-start lg:flex-row w-auto lg:w-[80%] mx-auto pt-10 lg:pt-[100px] xl:gap-5 2xl:gap-0 min-h-screen ">

            <AsideLeft />
            {/* xl:ml-[23rem] */}
            <main className="w-[88%] flex flex-col gap-10 lg:w-[50%]  mx-auto  ">
                <MainFeed />
                <MainFeed />

                <MainFeed />
                <MainFeed />

                <MainFeed />

                <MainFeed />


            </main>

            <FeedPost />
        </div>

    )
}

export default Feed