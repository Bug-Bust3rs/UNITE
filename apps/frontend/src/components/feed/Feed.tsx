import AsideLeft from "./AsideLeft"
import MainFeed from "./MainFeed"

const Feed = () => {
    return (
       
        <div className="flex flex-col sm:flex-row w-auto lg:w-[80%] mx-auto pt-10 lg:pt-[100px] min-h-screen ">

            <AsideLeft />
            
            <main className="w-[90%] flex flex-col gap-10 lg:w-[50%]  mx-auto xl:ml-[27rem] 2xl:mr-auto ">
                <MainFeed />
                <MainFeed />

                <MainFeed />
                <MainFeed />

                <MainFeed />

                <MainFeed />


            </main>
       
           
            </div>
      
    )
}

export default Feed