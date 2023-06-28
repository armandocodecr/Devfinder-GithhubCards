import Image from "next/image";
import { formatDate } from "../utils/formatDate.";

interface Props{
    avatar_url: string,
    name: string,
    login: string,
    bio: string,
    created_at: string
}

export function CardInformationProfile({ avatar_url, name, login, bio, created_at }: Props) {

    return(
        <>
            <section className="w-full h-auto grid grid-cols-[200px_minmax(300px,_1fr)] 
             grid-rows-2 max-[650px]:grid-cols-[130px_minmax(150px,_1fr)] max-[400px]:grid-cols-[120px_minmax(150px,_1fr)]"
            >
                <Image 
                    className="object-cover col-start-1 col-end-1 row-span-full rounded-full max-[650px]:w-[100px] max-[650px]:row-end-2"
                    width={150} 
                    height={100} 
                    src={avatar_url} 
                    alt="profile_avaar"
                />

                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-24 max-[650px]:gap-0 max-[650px]:flex-col max-[650px]:items-start max-[650px]:">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-mono max-[650px]:text-xl max-[400px]:text-lg">{ name }</h2>
                            <p className="text-[#0175F7] font-light max-[650px]:text-sm max-[400px]:text-[13px]" >{ `@${ login }` }</p>
                        </div>
                        <p className="font-mono text-slate-300 max-[650px]:text-sm max-[400px]:text-[12px]">{ `Joinded ${ formatDate( created_at ) }` }</p>
                    </div>
                </div>

                <div className="w-[400px] max-[650px]:w-[290px] max-[650px]:text-xs max-[650px]:mt-5 max-[400px]:text-[11px] max-[400px]:w-[250px]">
                    <p className="font-thin font-mono text-slate-400">{ bio }</p>
                </div>

            
            </section>
        </>
    )

}