<script setup>
import { computed, ref } from 'vue'
import Formation from '../components/Formation.vue'
import { useFormationStore } from '../stores/CatalogueStore'

const store = useFormationStore()
const recherche = ref('')

const formationsFiltrees = computed(() => {
  const motCle = recherche.value.toLowerCase().trim()

  if (!motCle) {
    return store.formations
  }

  return store.formations.filter((formation) => {
    return (
      formation.titre.toLowerCase().includes(motCle) ||
      formation.description.toLowerCase().includes(motCle) ||
      formation.niveau.toLowerCase().includes(motCle)
    )
  })
})
</script>

<template>
  <section class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-8">
        <span class="badge text-bg-warning border border-warning-subtle text-dark mb-2">Catalogue</span>
        <h1 class="fw-bold">Choisissez votre prochaine competence</h1>
        <p class="lead text-secondary">Des formations courtes et longues pour progresser dans les metiers du numerique.</p>
      </div>
    </div>

    

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="formation in formationsFiltrees" :key="formation.id">
        <Formation :formation="formation" />
      </div>
    </div>
  </section>
</template>


