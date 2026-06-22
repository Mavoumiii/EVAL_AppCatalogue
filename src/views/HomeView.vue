<template>
  <section class="py-5 bg-warning-subtle shadow-sm">
    <div class="container py-lg-5">
      <div class="row align-items-center g-5">
        <div class="col-12 col-lg-6">
          <span class="badge text-bg-warning border border-warning-subtle text-dark mb-3">Formations professionnelles a Mayotte</span>
          <h1 class="display-3 fw-bold text-dark mb-3">DWWM Academy</h1>

          <p class="lead text-secondary mb-4">
            Developpez vos competences avec des parcours concrets en developpement web,
            design, cybersecurite, data et support informatique.
          </p>

          <div class="d-flex flex-column flex-sm-row gap-2">
            <router-link to="/catalogue" class="btn btn-dark btn-lg shadow-sm">
              Decouvrir les formations
            </router-link>
            <router-link to="/contact" class="btn btn-outline-dark btn-lg bg-white bg-opacity-50">
              Nous contacter
            </router-link>
          </div>
        </div>  
      </div>
    </div>
  </section>

  <section class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-8">
        <span class="badge text-bg-warning border border-warning-subtle text-dark mb-3">Pourquoi choisir ALOALO</span>
        <h2 class="fw-bold">Une formation pensee pour passer a l'action</h2>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-4">
        <div class="card h-100 border-0 bg-warning-subtle shadow-sm">
          <div class="card-body">
            <span class="badge text-bg-primary mb-3">01</span>
            <h3 class="h5 fw-bold">Parcours pratiques</h3>
            <p class="text-secondary mb-0">Des projets progressifs pour apprendre, pratiquer et construire un portfolio.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card h-100 border-0 bg-warning-subtle shadow-sm">
          <div class="card-body">
            <span class="badge text-bg-primary mb-3">02</span>
            <h3 class="h5 fw-bold">Accompagnement</h3>
            <p class="text-secondary mb-0">Un suivi clair pour avancer avec confiance, du choix de formation a l'insertion.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card h-100 border-0 bg-warning-subtle shadow-sm">
          <div class="card-body">
            <span class="badge text-bg-primary mb-3">03</span>
            <h3 class="h5 fw-bold">Metiers utiles</h3>
            <p class="text-secondary mb-0">Des competences numeriques recherchees par les entreprises locales et nationales.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
