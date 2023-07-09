import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a passionate backend developer who likes to try my hand at other
            areas of the stack.  I have worked in every area of the tech stack for
            both companies I have worked at, however, I am by no means an expert.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one task at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be
            that I love crepes !!!
          </p>
        </div>

        <div className='right-side'>
            <p> </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About