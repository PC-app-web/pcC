<!--
  summary: Grid of competitions; consumes application store service.
  author: <Your Name>
-->
<template>
  <section role="region" aria-label="competitions-list">
    <div v-if="state.loading" class="p-4">Loading...</div>
    <div v-else-if="!state.items.length">
      <unavailable-content />
    </div>
    <div v-else class="grid" role="list">
      <div v-for="item in state.items" :key="item.id" class="col-12 md:col-6 lg:col-4">
        <competition-item :competition="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCompetitionStore } from '../../../competitions/application/competition.store.service.js'
import CompetitionItem from './competition-item.component.vue'
import UnavailableContent from './unavailable-content.component.vue'

const { state, load } = useCompetitionStore()

onMounted(() => {
  load()
})
</script>