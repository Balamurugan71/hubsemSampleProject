import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
export const SOCIALLINKS = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        link: 'https://www.facebook.com/hubsemsolutions'
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faInstagram} />,
        link: 'https://www.instagram.com/hubsemsolutions/'
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faTwitter} />,
        link: 'https://twitter.com/hubsem'
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        link: 'https://www.linkedin.com/company/hubsem-software-solutions/mycompany/'
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faYoutube} />,
        link: 'https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ'
    },
]