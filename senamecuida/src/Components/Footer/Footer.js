import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../Assets/image/logo/LogoSena.png';
import './estilos.css';

const Footer = ({ }) => {
    return (
        <div className='containerFooter'>
            <div className='logoFooter'>
                <img src={Logo} alt="" />
            </div>
            <div className='listIcons'>
                <div className='redes'>
                    <ul>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <a href="">Facebook</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <a href="">Instagram</a>
                        </li>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <a href="">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className='redes'>
                    <ul>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            Dirección
                        </li>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            Horarios
                        </li>
                        <li>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            Teléfono
                        </li>
                    </ul>
                </div>
            </div>
            <div className='copy'>
                <h5>© Todos los derechos reservados</h5>
            </div>
        </div>
    )
}

export { Footer }