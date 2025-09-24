<template>
  <div class="flex align-items-center gap-2">
    <span class="font-semibold">{{ t('language') }}:</span>
    <pv-select-button
      :model-value="current"
      :options="options"
      optionLabel="label"
      optionValue="value"
      @update:modelValue="onChange"
      aria-label="language-select-button"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
const options = [{ label: 'EN', value: 'en' }, { label: 'ES', value: 'es' }]
const current = computed(() => locale.value)
const onChange = (val) => { locale.value = val }
</script>