interface ExperienceProps {
    backgroundColor: string,
    label: string
}

function Experience({backgroundColor, label}: ExperienceProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default Experience;
