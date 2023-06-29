

interface Props{ 
    public_repos: number,
    followers: number,
    following: number,   
}

export function Stats({ public_repos, followers, following }: Props) {

    return (
        <div 
            className="w-[70%] rounded-lg h-20 bg-[#141C2F] self-end mr-5 mt-7 grid grid-cols-3 px-8 py-4 
            max-[800px]:w-[64%] max-[650px]:mt-0 max-[650px]:w-full max-[650px]:mr-0 max-[400px]:px-3"
        >
            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px] max-[400px]:text-[11px]">Repos</h3>
                <p className="font-bold text-lg max-[400px]:text-base">{ public_repos }</p>
            </div>

            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px] max-[400px]:text-[11px]">Followers</h3>
                <p className="font-bold text-lg max-[400px]:text-base">{ followers }</p>
            </div>

            <div className="flex flex-col items-start max-[650px]:items-center">
                <h3 className="font-mono text-slate-300 text-sm max-[650px]:text-[13px] max-[400px]:text-[11px]">Following</h3>
                <p className="font-bold text-lg max-[400px]:text-base">{ following }</p>
            </div>
                </div>
    )

}