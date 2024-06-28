import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const About = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const duration = 300;

  const defaultStyle = {
    padding: 0,
    border: 'none',
    transition: `all ${duration}ms ease-in-out`,
    height: 0,
    width: 0,
    overflow: 'hidden',
    background: 'lightgray',
    margin: "0 auto",
  }

  interface StylesInterface {
    opacity?: number | string,
    height?: number | string,
    width?: number | string,
    display?: string,
    background?: string,
    transform?: string
  }

  interface transitionStylesInterface {
    exited: StylesInterface,
    entering: StylesInterface,
    entered: StylesInterface,
    exiting: StylesInterface,
    unmounted: StylesInterface
  }

  const transitionStyles: transitionStylesInterface = {
    exited: {
      height: 0,
      width: 0,
    },
    entering: {
      height: "100px",
      width: "calc(50% - 40px)",
      background: 'lightgreen',
      transform: 'scale(2)',
    },
    entered: {
      height: "150px",
      width: "calc(100% - 40px)",
      background: 'green',
      transform: 'scale(1)',
    },
    exiting: {
      height: "100px",
      width: "calc(50% - 40px)",
      background: 'orange',
    },
    unmounted: {
      display: 'none',
      background: 'red',
    },
  };

  return (
    <>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration} mountOnEnter>
        {state => (
          console.log(state),
          <div data-testid="transition" ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <div>
              <h1>ОП</h1>
            </div>
          </div>

        )}
      </Transition >

      <div>
        <h1>Це сторінка про нас</h1>
      </div>

      <button className='btn' onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </>
  );
}

export default About;