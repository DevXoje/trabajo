interface InputProps {
    backgroundColor: string,
    label: string
}

function Input({backgroundColor, label}: InputProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default Input;
