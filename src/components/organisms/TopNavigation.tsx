interface TopNavigation {
    backgroundColor: string,
    label: string
}

function TopNavigation({backgroundColor, label}: TopNavigation) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default TopNavigation;
