
export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="src/assets/react.svg" alt="React Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}