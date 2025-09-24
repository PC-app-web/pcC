<template>
  <section role="region" aria-label="contacts-list">
    <div v-if="state.loading" class="p-4">Loading...</div>
    <div v-else-if="!state.items.length">
      <unavailable-content />
    </div>
    <div v-else class="grid" role="list">
      <div v-for="item in state.items" :key="item.id" class="col-12 md:col-6 lg:col-4">
        <contact-item :contact="item" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'
import { useContactStore } from '../../application/contact.store.service.js'
import ContactItem from './contact-item.component.vue'
import UnavailableContent from './unavailable-content.component.vue'
const { state, load } = useContactStore()
onMounted(() => load())
</script>