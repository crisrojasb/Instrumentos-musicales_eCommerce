import CartWidget from "./CartWidget";

const Navbar = () => {
  return(
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Nuevo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mi cuenta</a>
              </li>
              <div className="carrito">
                <p className="amount">1</p>
              </div>
              
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;