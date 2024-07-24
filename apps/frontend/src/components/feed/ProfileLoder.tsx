

const ProfileLoder = () => {
    return (
        <div className="relative flex w-64 lg:flex-col lg:justify-center lg:w-40 animate-pulse gap-2 lg:mx-auto p-4">
            <div className="h-12 w-12 lg:mx-auto rounded-full bg-slate-400"></div>
            <div className="flex-1 lg:gap-3">
                <div className="mb-1 lg:hidden  h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                <div className="h-5 w-[90%] lg:mx-auto rounded-lg bg-slate-400 text-sm"></div>
                <div className="h-5 w-[90%] lg:mx-auto hidden lg:mt-2 lg:block rounded-lg bg-slate-400 text-sm"></div>
            </div>
            <div className="absolute lg:hidden bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
        </div>
    )
}

export default ProfileLoder