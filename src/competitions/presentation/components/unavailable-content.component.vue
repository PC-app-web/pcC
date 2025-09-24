<!--
  summary: Shown when no competitions are available.
  author: <Your Name>
-->
<template>
  <div class="p-5 text-center text-500 border-1 surface-border border-round">
    {{ t('noItems') }}
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>