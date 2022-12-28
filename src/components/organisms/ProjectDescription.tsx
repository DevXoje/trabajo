interface ProjectDescriptionProps {
    backgroundColor: string,
    label: string
}

function ProjectDescription({backgroundColor, label}: ProjectDescriptionProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default ProjectDescription;
