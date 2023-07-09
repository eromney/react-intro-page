import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/ethanos.png'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'


const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['t', 'h', 'a', 'n', 'o', 's'];
    const jobArray = ['e','n','g','i','n','e','e','r'];

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                     <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"></img>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={21} /> </h1>
                <h2>Backend Developer / Programming Enthusiast / Dog Lover</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman"/>
        </>

    );
}

export default Home;