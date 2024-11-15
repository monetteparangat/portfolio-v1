import '../style/Projects.css'
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import Project from './Project';


function Projects() {
    const projectItems = [
        {
            id: 1,
            projImg: projImg1,
            title: 'Todo',
            description: 'Organize your tasks with ease.'
        },
        {
            id: 2,
            projImg: projImg2,
            title: 'Vinyl Store',
            description: 'Browse and shop online.'
        },
        {
            id: 3,
            projImg: projImg3,
            title: 'Inventory',
            description: 'Manage and organize your inventory.'
        }]

    return (
        <section id="projects">
            <div className="container-projects">
                <div>
                    <h1>Projects</h1>
                    <p>{'I’m excited to share a few projects that I’ve had the chance to work on. These are a mix of personal projects and things I’ve built to learn and grow as a developer. Each one reflects my journey — from experimenting with React, .NET, and Java to solving real-world challenges. I hope you enjoy exploring them as much as I enjoyed building them. Feel free to take your time and reach out if you have any questions!'}</p>
                </div>
                <div className='project-cards'>
                    {projectItems.map((item, i) => (
                        <div className='card' key={i}>
                            <Project {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;