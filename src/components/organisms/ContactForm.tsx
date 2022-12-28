interface ContactFormProps {
    backgroundColor: string,
    label: string
}

function ContactForm({backgroundColor, label}: ContactFormProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default ContactForm;
