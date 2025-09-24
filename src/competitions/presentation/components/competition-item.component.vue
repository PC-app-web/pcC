<!--
  summary: Single competition card (episode) showing all required fields.
  author: <Your Name>
-->
<template>
  <article :aria-label="competition.name" role="listitem">
    <pv-card class="h-full">
      <template #header>
        <img
          v-if="competition.imageUrl"
          :src="competition.imageUrl"
          class="w-full block"
          :alt="competition.name"
          loading="lazy"
          width="300"
          height="169"
        />
        <img
          v-else
          src="https://placehold.co/600x338?text=No+Image"
          class="w-full block"
          alt="No image available"
          loading="lazy"
          width="300"
          height="169"
        />
      </template>

      <template #title>
        <div class="flex justify-content-between align-items-center">
          <span class="font-semibold">{{ competition.name }}</span>
          <pv-rating :modelValue="ratingValue" :readonly="true" :cancel="false" :aria-label="t('rating')" />
        </div>
      </template>

      <template #subtitle>
        <div class="text-500">
          {{ t('season') }} {{ competition.season }} • {{ t('number') }} {{ competition.number }}
        </div>
      </template>

      <template #content>
        <p class="m-0" v-html="safeSummary"></p>
      </template>

      <template #footer>
        <pv-button
          :label="t('openIn')"
          icon="pi pi-external-link"
          severity="secondary"
          @click="openUrl"
          :aria-label="t('openIn')"
        />
      </template>
    </pv-card>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  competition: {
    type: Object,
    required: true
  }
})

const ratingValue = computed(() => {
  const v = props.competition?.ratingAverage
  // PrimeVue Rating expects a 0-5 value
  return v ? Math.round((v / 2)) : 0
})

const safeSummary = computed(() => {
  const s = props.competition?.summary || ''
  // tvmaze provides HTML; it is safe to render as is, but we can minimal sanitize to avoid scripts
  return String(s).replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
})

function openUrl() {
  window.open(props.competition.url, '_blank', 'noopener')
}
</script>

<style scoped>
article { display: block; }
</style>