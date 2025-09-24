<template>
  <article :aria-label="contact.name" role="listitem">
    <pv-card class="h-full">
      <template #header>
        <div class="flex align-items-center gap-2 p-3">
          <pv-avatar icon="pi pi-user" shape="circle" size="large" />
          <div class="flex flex-column">
            <span class="font-semibold text-lg">{{ contact.name }}</span>
            <small class="text-500">{{ contact.email }}</small>
          </div>
        </div>
      </template>
      <template #content>
        <div class="text-700">
          <div><strong>{{ t('company') }}:</strong> {{ contact.company }}</div>
          <div><strong>{{ t('city') }}:</strong> {{ contact.city }}</div>
          <div><strong>{{ t('website') }}:</strong> <a :href="httpUrl" target="_blank" rel="noopener">{{ contact.website }}</a></div>
        </div>
      </template>
      <template #footer>

      </template>
    </pv-card>
  </article>
</template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({ contact: { type: Object, required: true } })
const httpUrl = computed(() => {
  const w = props.contact.website || ''
  if (!w) return '#'
  return w.startsWith('http') ? w : `http://${w}`
})
function openSite() {
  const u = httpUrl.value
  if (u && u !== '#') window.open(u, '_blank', 'noopener')
}
</script>
<style scoped>
article { display: block; }
</style>