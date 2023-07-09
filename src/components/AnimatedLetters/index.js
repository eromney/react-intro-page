import './index.scss';

/* Takes in 3 args
 * @param letterClass: class that we want to apply to our characters
 * @param strArray: the array of our characters
 * @param idx: the index / starting point which will set delay or letters
 * and animation
 */ 
const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className = {`${letterClass} _${i + idx}`}> 
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;