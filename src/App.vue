<!--
  summary: Root component mounting Layout + Competitions store view.
  author: <Your Name>
-->
<template>
  <public-layout>
    <template #content>
      <section class="p-3" aria-labelledby="store-title">
        <div class="flex align-items-center justify-content-between mb-3">
          <h2 id="store-title" class="m-0">{{ t('storeTitle') }}</h2>
          <pv-button
            aria-label="search-competitions"
            :label="t('searchCompetitions')"
            icon="pi pi-external-link"
            @click="goToPartner"
          />
        </div>
        <competition-list />
      </section>
    </template>
  </public-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import CompetitionList from './competitions/presentation/components/competition-list.component.vue'
import PublicLayout from './shared/presentation/components/layout.component.vue'

const { t } = useI18n()

const goToPartner = () => {
  window.open('https://www.fifa.com/es/tournaments/mens/club-world-cup/usa-2025', '_blank', 'noopener')
}
</script>

<style>
:root { color-scheme: light dark; }
</style>