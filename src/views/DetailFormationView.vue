<script setup>
import { useRoute } from 'vue-router'
import { useFormationStore } from '../stores/CatalogueStore'

const route = useRoute()
const store = useFormationStore()

const formation = store.formations.find((item) => item.id == route.params.id)

const ajouter = () => {
  store.ajouterFavori(formation)
}
</script>

<template>
  <section class="container py-5" v-if="formation">
    <article class="card border-0 rounded-4 shadow-lg overflow-hidden">
      <div class="row g-0">
        <div class="col-12 col-lg-6 bg-warning-subtle">
            <div class="card-body p-4 p-lg-5">
                <span class="badge text-bg-warning border border-warning-subtle text-dark mb-3">{{ formation.niveau }}</span>
                <h1 class="h2 fw-bold">{{ formation.titre }}</h1>

                <p class="lead text-secondary">{{ formation.description }}</p>
                

                <ul class="list-group list-group-flush mb-4">
                    <li class="list-group-item bg-warning-subtle px-0">
                        <strong>Duree :</strong> {{ formation.duree }}
                    </li>
                    <li class="list-group-item bg-warning-subtle px-0">
                        <strong>Prix :</strong> {{ formation.prix }} EUR
                    </li>
                </ul>

                <button class="btn btn-dark btn-lg" @click="ajouter">
                Ajouter aux favoris
                </button>
            </div>
        </div>
        <div class="col-12 bg-warning-subtle col-lg-6">
            <div class="card-body p-4 p-lg-5">
                <p class="fs-4  text-secondary">{{ formation.descriptionDetaillee }}</p>
            </div>
        </div>

        
      </div>
    </article>
  </section>
</template>
