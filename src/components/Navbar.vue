<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning-subtle border-bottom border-warning-subtle shadow-sm sticky-top navbar-glass">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark" to="/">
        <img
          src="../assets/img/LogoAloalo.webp"
          alt="Logo DWWM Academy"
          class="brand-logo"
        >
        <span>DWWM Academy</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Ouvrir le menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="menu" class="collapse navbar-collapse">
         <form class="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0" role="search">
          <input
            class="form-control form-control-sm rounded-pill search-input"
            type="search"
            placeholder="  Rechercher..."
            aria-label="Rechercher"
          >
        </form>
        <ul class="navbar-nav ms-auto fw-semibold gap-lg-1">
          <li class="nav-item">
            <router-link class="nav-link rounded-pill px-lg-3" exact-active-class="active" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link rounded-pill px-lg-3" active-class="active" to="/catalogue">Catalogue</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link rounded-pill px-lg-3" active-class="active" to="/favoris">Favoris</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link rounded-pill px-lg-3" active-class="active" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
