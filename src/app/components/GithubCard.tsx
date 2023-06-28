"use client";

import { MouseEvent, useContext, useEffect, useState } from "react";
import { CardInformationProfile, Stats, AdditionalInformatioProfile } from "./";
import { GithubProfileContext } from "../context/GithubProfileContext";

export function GithubCard() {
  const { githubProfile } = useContext(GithubProfileContext);
  const avatar_default = "https://avatars.githubusercontent.com/u/69958471?v=4";
  const [card, setCard] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const cardElement = document.getElementById('github-card');
    setCard(cardElement);
  }, []);

  const onMouseMoveEffect = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {

    if(githubProfile && !githubProfile.error){

      const { clientX, clientY } = e
  
      const width = card?.clientWidth
      const height = card?.clientHeight
  
      const yRotation = (
        (clientX - width! / 2) / width!
      ) * 20
  
      const xRotation = (
        (clientY - height! / 1) / height!
      ) * 20
  
      const string = `
        perspective(1000px)
        scale(1.01)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `
  
      if(card) card.style.transform = string

    }

  }

  const onMouseOutEffect = () => {

    if(githubProfile && !githubProfile.error){

      const string = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `
  
      if(card) card.style.transform = string

    }

  }

  return (
    <section 
      className={`w-5/12 min-w-[700px] min-h-[400px] shadow h-auto bg-[#1F2A48] rounded-xl flex justify-center items-center mt-5 p-10 
     ${githubProfile && !githubProfile.error ? ' transition-transform duration-75 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]' : ''}
     max-[650px]:min-w-[350px] max-[650px]:p-5`}
      id="github-card"
      onMouseMove={e => onMouseMoveEffect(e)}
      onMouseOut={ onMouseOutEffect}
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
            <h1 className="text-4xl font-bold tracking-wide">
                Usuario no encontrado...
            </h1>
          )
          
        ) : (
          <h1 className="text-4xl font-bold tracking-wide max-sm:text-xl">
            Busca un perfil...
          </h1>
        )}
      </article>
    </section>
  );
}
