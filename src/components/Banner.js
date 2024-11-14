import '../style/Banner.css'
import welcome from '../assets/img/welcome.svg'

function Banner() {
    return (
        <section id="home">
            <div className="container-banner">
                <div className='row'>
                    <div className='col'>
                        <span>{'Welcome! I\’m glad you’re here.'}</span>
                        <h1>{'I\'m Monette'} </h1>
                        <h2>WEB DEVELOPER</h2>
                        <p>{'I\'m a developer who loves building interactive web experiences. From React front-end to back-end systems, I enjoy turning ideas into clean, efficient code. Always learning and solving new problems along the way!'}</p>
                        <button>Connect</button>
                    </div>
                    <div className='col'>
                        <img src={welcome} alt='walk' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;