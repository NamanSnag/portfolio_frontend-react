import React from 'react'
import { BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href='https://twitter.com/' target="_blank" rel="noopener">
        <BsTwitter />
        </a>
        <a href='https://github.com/NamanSnag' target="_blank" rel="noopener">
        <BsGithub />
        </a>
        <a href='https://www.instagram.com/' target="_blank" rel='noopener'>
        <BsInstagram />
        </a>
    </div>
  )
}

export default SocialMedia
