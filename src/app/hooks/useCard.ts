'use client'
import { useContext, useState, useEffect, MouseEvent } from 'react';
import { GithubProfileContext } from "../context/GithubProfileContext";


export function useCard () {

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

  return {
    // variables
    githubProfile,
    avatar_default,

    //Methods
    onMouseMoveEffect,
    onMouseOutEffect
  }

}