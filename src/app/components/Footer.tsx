

export function Footer() {
    return (
        <footer className="w-screen h-auto mt-5 flex justify-center items-center max-[650px]:text-xs max-[650px]:bottom-0">
            Made by &nbsp; 
            <a 
              className="font-bold cursor-pointer"
              href="https://github.com/armandocodecr"
              target="_blank"
            >
                ArmandoCodeCR
            </a>  
            &nbsp; from &nbsp; 
            <img 
              width="38"
              height="10"
              src="https://em-content.zobj.net/thumbs/120/toss-face/342/flag-costa-rica_1f1e8-1f1f7.png" 
              alt="img_costarica" 
            />
            &nbsp; with 💗
        </footer>
    )
}