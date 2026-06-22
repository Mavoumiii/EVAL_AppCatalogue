<script setup>
import { useFormationStore } from '../stores/CatalogueStore'

const store = useFormationStore()
</script>

<template>
  <section class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-8">
        <span class="badge text-bg-warning border border-warning-subtle text-dark mb-2">Selection</span>
        <h1 class="fw-bold">Mes favoris</h1>
      </div>
    </div>

    <div v-if="store.favoris.length === 0" class="alert alert-warning border-warning shadow-sm">
      Aucun favori pour le moment. Explorez le catalogue et gardez les formations qui vous interessent.
    </div>

    <div class="card border-0 rounded-4 shadow-sm mb-3 modern-card" v-for="formation in store.favoris" :key="formation.id">
      <div class="card-body d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <h5 class="fw-bold">{{ formation.titre }}</h5>
          <p class="text-secondary mb-0">{{ formation.description }}</p>
        </div>

        <button class="btn btn-danger align-self-md-center" @click="store.supprimerFavori(formation.id)">
          Supprimer
        </button>
      </div>
    </div>
  </section>
</template>
