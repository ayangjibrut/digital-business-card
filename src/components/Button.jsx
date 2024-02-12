import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Button() {
    return (
        <div class="button--" className="button--">
            <a className="button" href="mailto:rizzamarwan@icloud.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
            <a className="linkedin--" href="https://www.linkedin.com/in/ayangjibrut/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        </div>
    )
}

export default Button