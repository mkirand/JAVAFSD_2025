function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Simplilearn</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/suers">Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/counter">Counter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/form">Form Validation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/resize">Resize</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default NavBar;