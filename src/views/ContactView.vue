<template>
  <section class="container py-5">
    <div class="row g-4 align-items-start">
      <div class="col-12 col-lg-5">
        <span class="badge text-bg-warning border border-warning-subtle text-dark mb-2">Contact</span>
        <h1 class="fw-bold">Parlons de votre projet de formation</h1>
        <p class="lead text-secondary">
          Une question sur le catalogue, un financement ou une inscription ?
          Laissez-nous un message, nous vous recontactons rapidement.
        </p>

        <div class="alert alert-warning border-warning mt-4 mb-0 shadow-sm">
          <strong>ALOALO Mayotte Competences</strong><br>
          Doujani 1, 97600 Mamoudzou
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <form class="card border-0 bg-warning-subtle rounded-4 shadow-lg">
          <div class="card-body p-4">
            <div class="mb-3">
              <label for="name" class="form-label bg-warning-subtle fw-semibold">Nom</label>
              <input id="name" class="form-control bg-warning-subtle form-control-lg" placeholder="Votre nom">
            </div>

            <div class="mb-3">
              <label for="email" class="form-label bg-warning-subtle fw-semibold">Email</label>
              <input id="email" type="email" class="form-control bg-warning-subtle form-control-lg" placeholder="votre@email.fr">
            </div>

            <div class="mb-3">
              <label for="message" class="form-label fw-semibold">Message</label>
              <textarea id="message" rows="5" class="form-control bg-warning-subtle" placeholder="Expliquez votre besoin"></textarea>
            </div>

            <button class="btn btn-dark btn-lg" type="button">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
