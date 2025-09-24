<template>
  <app-layout>
    <template #content>
      <section class="p-3">
        <div class="flex align-items-center justify-content-between mb-3">
          <h2 class="m-0">{{ t('storeTitle') }}</h2>
          <pv-button
            :label="t('searchAction')"
            icon="pi pi-external-link"
            @click="openDocs"
            aria-label="open-jsonplaceholder"
          />
        </div>
        <contact-list />
      </section>
    </template>
  </app-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppLayout from './shared/presentation/components/layout.component.vue'
import ContactList from './contacts/presentation/components/contact-list.component.vue'
const { t } = useI18n()
function openDocs() {
  window.open('https://jsonplaceholder.typicode.com/users', '_blank', 'noopener')
}
</script>