import HeroImg from './images/Group77.png'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-img">
                <img src={HeroImg} alt="" />
            </div>
            <div className="hero-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities eld by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </div>
    );
}

export default Hero;

