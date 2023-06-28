

interface Props{ 
    public_repos: number,
    followers: number,
    following: number,   
}

export function Stats({ public_repos, followers, following }: Props) {

    return (
        <div 
            className="w-[70%] rounded-lg h-20 bg-[#141C2F] self-end mr-5 mt-7 grid grid-cols-3 px-8 py-4 
            max-[650px]:mt-0 max-[650px]:w-full max-[650px]:mr-0"
        >
            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px]">Repos</h3>
                <p className="font-bold text-lg">{ public_repos }</p>
            </div>

            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px]">Followers</h3>
                <p className="font-bold text-lg">{ followers }</p>
            </div>

            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px]">Following</h3>
                <p className="font-bold text-lg">{ following }</p>
            </div>
                </div>
    )

}