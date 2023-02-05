import React from 'react'
import { BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <BsTwitter />
        </div>
        <div>
        <BsGithub />
        </div>
        <div>
        <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia