<!--
  summary: Footer with copyright + developer info (edit your data).
  author: <Your Name>
-->
<template>
  <footer class="mt-auto p-4 border-top-1 surface-border surface-card text-sm" role="contentinfo">
    <div class="text-center">{{ t('footerCopyright') }}</div>
    <div class="text-center">
      {{ t('footerDevelopedBy') }}: <strong>u00000000 - Your Name</strong>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>