import { FaLocationArrow, FaLink, FaTwitter, FaBuilding } from "react-icons/fa";

interface Props {
    location: string | null,
    blog: string | null,
    twitter_username: string | null,
    company: string | null
}

export function AdditionalInformatioProfile({ location, blog, twitter_username, company }: Props) {
    
    return (

        <div className="w-[73%] self-end mt-7 flex gap-10 max-[650px]:flex-col max-[650px]:self-start max-[650px]:gap-3">
             <div className="flex flex-col">
                 <div className="w-auto flex flex-row justify-center items-center gap-3 self-start">
                     <FaLocationArrow />
                     <p className={`${ location ?? 'text-slate-500'}`}>{  location ?? 'Not available' }</p>
                 </div>   
                 <div className="w-auto flex flex-row justify-center items-center gap-3 self-start mt-5 max-[650px]:mt-2">
                     <FaLink />
                     <p className={`${ blog === "" ? 'text-slate-500' : ''}`}>{  blog !== "" ? blog : 'Not available' }</p>
                 </div>
             </div>
             <div className="flex flex-col">
                 <div className="w-auto flex flex-row justify-center items-center gap-3 self-start">
                     <FaTwitter />
                     <p className={`${ twitter_username ?? 'text-slate-500'}`}>{  twitter_username ?? 'Not available' }</p>
                 </div>   
                 <div className="w-auto flex flex-row justify-center items-center gap-3 self-start mt-5 max-[650px]:mt-2">
                     <FaBuilding />
                     <p className={`${ company ?? 'text-slate-500'}`}>{  company ?? 'Not available' }</p>
                 </div>
             </div>
        </div>

    )

}