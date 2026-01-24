function Logo() {
    return (
        <img className="logo" src={new URL("../../assets/icons/A3Y.svg", import.meta.url).href} alt="main logo" />
    )
}

export default Logo;