import styled from "styled-components";

const Animations = () => {
    return ( 
        <AnimationsContainer>
            <div className="one">
                <div className="six">
                 </div>
            </div>

            <div className="three">
                <div className="four">
                 </div>
            </div> 
            <div className="one">
                <div className="six">
                 </div>
            </div>

            <div className="three">
                <div className="four">
                 </div>
            </div> 
            <div className="one">
                <div className="six">
                 </div>
            </div>

            <div className="three">
                <div className="four">
                 </div>
            </div> 
            <div className="one">
                <div className="six">
                 </div>
            </div>

            <div className="three">
                <div className="four">
                 </div>
            </div> 


        </AnimationsContainer>
     );
}
 
export default Animations;

const AnimationsContainer = styled.div`
    display: flex;
    padding-top: 30px;

    .bar { 
            width: 500px;
            position: fixed;
            height: 4em;
            z-index: 1;
            background: ${props => props.theme.primary};
    }

    .one {
        padding: 0 7px;
        animation-name: movimiento2;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-delay: -2s;
        @keyframes movimiento2 {
            0% {transform: translate(0px, 600px);}
            100% {transform: translate(0px, 0px);}
        }
    }

    .three {
        padding: 0 10px;
        animation-name: movimiento2;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        @keyframes movimiento2 {
            0% {transform: translate(0px, 600px);}
            100% {transform: translate(0px, 0px);}
        }
    }
    .five {
        padding: 0 15px;
        animation-name: movimiento2;
        animation-duration: 3.5s;
        animation-iteration-count: infinite;
        animation-delay: 1s;
        @keyframes movimiento2 {
            0% {transform: translate(0px, 600px);}
            100% {transform: translate(0px, 0px);}
        }
    }

    .two {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-color: ${props => props.theme.secondary};
        border-radius: 8px;
        animation-name: rotacion1;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        color: white;

    @keyframes rotacion1 {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(180deg);}
        }
    }
    .four {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: ${props => props.theme.tertiary};
        border-radius: 8px;
        animation-name: rotacion1;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        color: white;

    @keyframes rotacion1 {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
        }
    }
    .six {
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: ${props => props.theme.tertiary};
        border-radius: 8px;
        animation-name: rotacion1;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        color: white;

    @keyframes rotacion1 {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
        }
    }
`