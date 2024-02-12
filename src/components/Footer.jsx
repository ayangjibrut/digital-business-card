import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <ul className="footer-- font-awesome--">
            <li><a id="font-awesome--" href="https://twitter.com/ayangjibrut"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
            <li><a id="font-awesome--" href="https://www.facebook.com/ayangjibrut"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
            <li><a id="font-awesome--" href="https://www.instagram.com/jibzky/"><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
            <li><a id="font-awesome--" href="https://github.com/ayangjibrut"><FontAwesomeIcon icon={faSquareGithub} /></a></li>
        </ul>
    )
}

export default Footer