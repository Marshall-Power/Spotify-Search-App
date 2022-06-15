import React from 'react'
import linkedinIcon from '../assets/img/linkedin-ico.png'
import githubIcon from '../assets/img/github-ico.png'
import overflowIcon from '../assets/img/overflow-ico.svg'

const Footer = (): JSX.Element => {
    
    let currentDate = new Date()
    
    return(
        <footer className="main-footer">
        <div className="main-container">
            <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
                <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
                </h2>
                <div className="main-footer__social-cont">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marcelpr/">
                    <img className="main-footer__icon" src={linkedinIcon} alt="icon" loading='lazy'/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Marshall-Power">
                    <img className="main-footer__icon" src={githubIcon} alt="icon" loading='lazy'/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/12037153/marshall">
                    <img className="main-footer__icon main-footer__icon--mr-none" src={overflowIcon} alt="icon" loading='lazy'/>
                </a>
                </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
                <h4 className="heading heading-sm text-lt">Marcel Planas</h4>
                <p className="main-footer__short-desc">
                Frontend Software Developer from Barcelona, let's build things together.
                </p>
            </div>
            </div>

            <div className="main-footer__lower">
                © Copyright {currentDate.getFullYear()}. Made by Marcel Planas
            </div>
        </div>
        </footer>
    )
}

export default Footer