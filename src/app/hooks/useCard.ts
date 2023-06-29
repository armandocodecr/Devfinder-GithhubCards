'use client'
import { useContext, useState, useEffect, MouseEvent, useRef, useCallback } from 'react';
import { GithubProfileContext } from "../context/GithubProfileContext";
import { toPng } from 'html-to-image'


export function useCard () {

  const { githubProfile } = useContext(GithubProfileContext);
  const avatar_default = "https://avatars.githubusercontent.com/u/69958471?v=4";
  const [card, setCard] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cardElement = document.getElementById('github-card');
    setCard(cardElement);
  }, []);

  const onDownloadCard = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'YourGithubCard.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

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
    ref,

    //Methods
    onMouseMoveEffect,
    onMouseOutEffect,
    onDownloadCard
  }

}