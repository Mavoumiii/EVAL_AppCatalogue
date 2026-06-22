<template>
  <footer class="mt-auto bg-purple text-white pt-5 pb-3 border-top border-warning-subtle">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-lg-5">
          <h2 class="h4 text-dark fw-bold">ALOALO Mayotte Competences</h2>
          <p class="text-secondary mb-3">
            Centre de formation a Mayotte, engage pour accompagner les parcours,
            les competences et l'insertion professionnelle.
          </p>
          <router-link class="btn btn-outline-warning" to="/catalogue">Voir le catalogue</router-link>
        </div>

        <nav class="col-6 col-md-4 col-lg-2" aria-label="Navigation du pied de page">
          <h3 class="h6 fw-bold text-dark text-uppercase">Navigation</h3>
          <ul class="list-unstyled d-grid gap-2 mb-0">
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/">Accueil</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/catalogue">Nos formations</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/favoris">Favoris</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/contact">Contact</router-link></li>
          </ul>
        </nav>

        <nav class="col-6 col-md-4 col-lg-2" aria-label="Liens formations">
          <h3 class="h6 fw-bold text-dark text-uppercase">Formations</h3>
          <ul class="list-unstyled d-grid gap-2 mb-0">
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/catalogue">Developpeur web</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/catalogue">Data analyst</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/catalogue">Cybersecurite</router-link></li>
            <li><router-link class="link-dark link-opacity-75-hover text-decoration-none" to="/catalogue">Reseaux</router-link></li>
          </ul>
        </nav>

        <div class="col-12 col-md-4 col-lg-3">
          <h3 class="h6 fw-bold text-dark text-uppercase">Contact</h3>
          <p class="text-secondary mb-3">
            2 rue de la mosquee<br>
            Doujani 1, 97600 Mamoudzou<br>
            contact@aloalo-formation.fr
          </p>
          <div class="d-flex gap-2">
            <a class="btn btn-outline-dark btn-sm rounded-circle social-btn" href="#" aria-label="LinkedIn ALOALO">in</a>
            <a class="btn btn-outline-dark btn-sm rounded-circle social-btn" href="#" aria-label="Facebook ALOALO">f</a>
          </div>
        </div>
      </div>

      <div class="border-top border-warning mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between gap-2 text-secondary small">
        <p class="mb-0">&copy; 2026 ALOALO Mayotte Competences. Tous droits reserves.</p>
        <a class="link-dark text-decoration-none" href="https://www.alomayjob.com" target="_blank" rel="noopener noreferrer">
          Groupe Alomayjob
        </a>
      </div>
    </div>
  </footer>
</template>
