interface TopNavigationProps {
    backgroundColor: string,
    label: string
}

function TopNavigation({backgroundColor, label}: TopNavigationProps) {
    return (
        <div> hola mundo {label}</div>
    );
}

export default TopNavigation;
