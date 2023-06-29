"use client";
import { CardInformationProfile, Stats, AdditionalInformatioProfile } from "./";
import { useCard } from "../hooks/useCard";
import { DownloadButton } from "./UI";

export function GithubCard() {
  
  const { githubProfile, avatar_default, onMouseMoveEffect, 
  onMouseOutEffect, ref, onDownloadCard } = useCard()

  return (
    <section className='w-auto flex flex-col justify-center items-center'>
      <div 
        className={`w-5/12 min-w-[800px] min-h-[400px] shadow h-auto bg-[#1F2A48] rounded-xl flex justify-center items-center mt-5 p-10 
       ${githubProfile && !githubProfile.error ? ' transition-transform duration-75 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]' : ''}
       max-[800px]:min-w-[650px] max-[650px]:min-w-[350px] max-[650px]:p-5 max-[400px]:min-w-[300px]`}
        id="github-card"
        onMouseMove={e => onMouseMoveEffect(e)}
        onMouseOut={onMouseOutEffect}
        ref={ref}
      >
        <article className="w-full h-auto flex flex-col items-center">
          {githubProfile ? (
      
            !githubProfile.error ? (
              <>
                <CardInformationProfile
                  avatar_url={githubProfile.avatar_url ?? avatar_default}
                  name={githubProfile.name}
                  login={githubProfile.login}
                  bio={githubProfile.bio}
                  created_at={githubProfile.created_at}
                />
      
                <Stats
                  public_repos={githubProfile.public_repos}
                  followers={githubProfile.followers}
                  following={githubProfile.following}
                />
      
                <AdditionalInformatioProfile
                  location={githubProfile.location}
                  blog={githubProfile.blog}
                  company={githubProfile.company}
                  twitter_username={githubProfile.twitter_username}
                />
              </>
            ) : (
              <h1 className="text-4xl font-bold tracking-wide max-sm:text-xl">
                  Username not found...
              </h1>
            )
            
          ) : (
            <h1 className="text-4xl font-bold tracking-wide max-sm:text-xl">
              Search profile...
            </h1>
          )}
        </article>
      </div>

     {
      githubProfile && !githubProfile.error && (
        <DownloadButton onDownloadCard={ onDownloadCard } />
      )
     }
    </section>
  );
}
