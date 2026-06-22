<script setup>
defineProps({
  formation: Object
})
</script>

<template>
  <article class="card h-100 border-0 rounded-4 bg-warning-subtle shadow-sm formation-card">
    <div class="card-body d-flex flex-column">
      <span class="badge text-bg-warning border border-warning-subtle text-dark align-self-start mb-3">{{ formation.niveau }}</span>
      <h5 class="card-title fw-bold">{{ formation.titre }}</h5>
      <p class="card-text text-secondary">{{ formation.description }}</p>
      <ul class="list-group list-group-flush mb-3">
        <li class="list-group-item px-0 bg-transparent">
          <strong>Duree :</strong> {{ formation.duree }}
        </li>
        <li class="list-group-item px-0 bg-transparent">
          <strong>Prix :</strong> {{ formation.prix }} EUR
        </li>
      </ul>
      <router-link :to="`/formation/${formation.id}`" class="btn btn-dark mt-auto">
        Voir le detail
      </router-link>
    </div>
  </article>
</template>
