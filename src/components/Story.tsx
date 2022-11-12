import {useState } from "react";
import styled from "styled-components";


const Main3 = () => {

  const song1 = require('../components/audio/fantasyMusic.mp3')

  const [hide, setHide] = useState(false)
  const [format, setFormat] = useState('show')
  const [song, setSong] = useState(true)
  const [audio, setAudio] = useState(new Audio(song1))

  let play = () => {
    if (song === true) {
      audio.play()
      setSong(false)
      console.log('Playing')
    } else {
      console.log('Nothing happened')
    }
  }

  let pause = () => {
   if (song === false) {
    audio.pause()
    console.log('Pausing')
    setSong(true)
   }
   console.log('Nothing happened')
  }

  const handleShow = () => {
      setHide(true)
      play()
  }

  const handleHide = () => {
      setHide(false)
      pause()
  }
 
  const handleFormat = () => {
    const changingFormat = () => {
      if (format === "show") {
        setFormat('hide')
    } else {
        setFormat('show')
    }
  }
  changingFormat()
}

    return ( 
        <Main3Container className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="title-and-btn">
                <h1>Story</h1>  
                <StopBtn onClick={pause}>Stop Music</StopBtn>
              </div>
              <div className="row">
                <div className="col-12">
                  <div>
                    <p  className="main-text">
                    Down Below we detail several phrases that can be related to their
                    titled. For more details, click on them to
                    discover them and let the imagination fly for their comprehension and understanding.
                    </p>
                    <p className="show-btn" onClick={() => handleShow()}>Click here to start your adventure!</p>
                  </div>
                  </div>
                  <div className="text col-6">
                    <h4>Pray</h4>
                    { hide ?  
                    <p className={format} onClick={() => handleFormat()}>"I have no gods to pray to. But still I pray that your journey
                    will be safe."</p> 
                    :
                    <p></p>
                    }
                  </div>
                  <div className="text col-6">
                  <h4>A fine Dark Soul</h4>
                    { hide ?  
                    <p className={format} onClick={() => handleFormat()}> "Every age, it seems, is tainted by the greed of men. Rubbish,
                    to one such as I, devoid of all worldly wants! Hmmm, I dunno,
                    maybe it's just the way we are. I'll stick you in my prayers. A
                    fine dark soul, to you."</p> 
                    :
                    <p></p>
                    }
                  </div>
                  <div className="text col-6">
                  <h4>The good and the bad guy</h4>
                    { hide ?  
                    <p className={format} onClick={() => handleFormat()}>"Let's play something else. Let's play good guys against bad
                    guys. Are you ready? You're the bad guy. And when you're bad,
                    you just run. That's fine, right?"</p> 
                    :
                    <p></p>
                    }
                  </div>
                  <div className="text col-6">
                  <h4>Fire will fade</h4>
                    { hide ?  
                    <p className={format} onClick={() => handleFormat()}> “One day, fire will fade, and Dark will become a curse. Men will
                    be free from death, left to wander eternally. Dark will again be
                    ours, and in our true shape…We can bury the false legends of
                    yore…Only…Is this our only choice?”</p> 
                    :
                    <p></p>
                    }
                  </div>
                </div>
                  <p className="hide-btn" onClick={() => handleHide()}>Hide Text</p>
            </div>
          </div>
        </Main3Container>
    )
}
 
export default Main3;

// Styled-components

const Main3Container = styled.div`
    color: ${props => props.theme.fontPrim};
    display: flex;

  .title-and-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    opacity: 0.3;
  }
  .text {
    margin-top: 10px;
    min-height: 180px;
  }

  .hide-btn {
    justify-self: flex-end;
    font-size: 18px;
    color: ${props => props.theme.secondary};
    cursor: pointer;
    &:hover {
      font-weight: 500;
    }
  }

  .show-btn {
    font-size: 18px;
    color: ${props => props.theme.secondary};
    cursor: pointer;
    &:hover {
      font-weight: 500;
    }
  }
  .show {
    margin: 0;
    display: flex;
    cursor: pointer;
    filter: blur(2px)
  }

  .hide {
    margin: 0;
    cursor: pointer;
    animation-name: movimiento1;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;

@keyframes movimiento1 {
    8.33% {transform: translate(0px, 1px);}
    16.66% {transform: translate(0px, 2px);}
    25% {transform: translate(0px, 3px);}
    32.32% {transform: translate(0px, 4px);}
    41.65% {transform: translate(0px, 5px);}
    50% {transform: translate(0x, 6px);}
    58.31% {transform: translate(0px, 5px);}
    66.64% {transform: translate(0px, 4px);}
    74.97% {transform: translate(0px, 3px);}
    83.3% {transform: translate(0px, 2px);}
    91.63% {transform: translate(0px, 1px);}
    100% {transform: translate(0px, 0px);}
}

  }
`

const StopBtn = styled.p`
    cursor: pointer;
    font-size: 18px;
    margin: 0;
    color: ${props => props.theme.secondary};
    &:hover {

      font-weight: 500;
    }
`


