import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <h2 className="footer font-awesome--">
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faSquareGithub} />
        </h2>
    )
}

export default Footer