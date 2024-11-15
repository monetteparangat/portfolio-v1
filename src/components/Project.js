function Project({ projImg, title, description, id }) {
    return (
        <div className='card' key={id}>
            <img src={projImg} />
            <div className='card-text'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default Project;