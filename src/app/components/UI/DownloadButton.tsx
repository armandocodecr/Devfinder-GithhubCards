import { useCard } from '../../hooks/useCard';

interface Props {

    onDownloadCard: () => void

}

export function DownloadButton({ onDownloadCard }: Props){

    return(
        <button 
          className='download-btn'
          onClick={onDownloadCard}
        >
          Get your GithubCard
        </button>
    )

}