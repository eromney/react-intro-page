import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {useState, useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {

    const[letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, []);

      const sendEmail = (event) => {
        event.preventDefault();
        console.log(`refForm: ${refForm.current}`);
        emailjs
            .sendForm(
                'service_nhonmv8', // service_id
                'template_5k1psdq', // template id
                refForm.current, // form reference
                'L7YyIDOBMwUfdzomk' // user token which I think is public key now ?

            )
            .then(
                () => {
                    alert(`Message successfully sent!`)
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send!')
                }
            )
      }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['c','o','n','t','a','c','t',' ', 'm','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in .... opportunities.  You can feel free
                        to contact me with the form below
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input 
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea 
                                    placeholder="Message" 
                                    name="message" 
                                    required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Ethanos,
                    <br />
                    Bellevue,
                    <br />
                    123 18th Ave E, Seattle, WA 98112 <br />
                    Seattle <br />
                    <br />
                    <span>ethanos@notanemail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[47.632042, -122.350948]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[47.632042, -122.350948]}>
                        <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacmane"/>
        </>
    )
}

export default Contact;