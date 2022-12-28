interface FieldProps {
    backgroundColor: string,
    label: string
}

function Field({backgroundColor, label}: FieldProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default Field;

