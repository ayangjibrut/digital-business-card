import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <h2 className="footer font-awesome--">
            <a href="https://twitter.com/ayangjibrut"><FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a href="https://www.facebook.com/ayangjibrut"><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a href="https://www.instagram.com/jibzky/"><FontAwesomeIcon icon={faSquareInstagram} /></a>
            <a href="https://github.com/ayangjibrut"><FontAwesomeIcon icon={faSquareGithub} /></a>
        </h2>
    )
}

export default Footer