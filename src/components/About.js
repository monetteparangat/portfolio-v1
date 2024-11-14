import '../style/About.css';
import walkImg from '../assets/img/walk.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'

function About() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section id="about">
            <div className="container-about">
                <h1>About Me</h1>
                <div className='row'>
                    <div className='col'>
                        <img src={walkImg} />
                    </div>
                    <div className='col'>
                        <p>{'Hey there! I\'m a software developer with experience in Java and C#.NET, and I love building web apps. I\’m passionate about using React.js to create reusable, efficient components. Writing clean, scalable code and making sure everything aligns with the design is something I really focus on. I also have experience with tools like Azure DevOps to keep projects organized and manage code changes effectively.'}</p>
                    </div>
                </div>
                <h1>Skills</h1>
                <div className='row'>
                    <Carousel responsive={responsive} infinite={true} className='carousel-skills'>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>Clean Architecture, OOP</h5>
                        </div>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>.NET</h5>
                        </div>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>Java and Spring Boot</h5>
                        </div>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>HTML, CSS, JavaScript, jQuery, Bootstrap</h5>
                        </div>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>VueJS, ReactJS</h5>
                        </div>
                        <div className="skill-item">
                            <img src={meter2} />
                            <h5>MySQL and MS SQL</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default About;