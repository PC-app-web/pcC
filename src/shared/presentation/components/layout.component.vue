<!--
  summary: Top toolbar with logo + brand (left) and language switcher (right). Footer below.
  author: <Your Name>
-->
<template>
  <div class="min-h-screen flex flex-column">
    <header>
      <pv-toolbar class="px-3" role="navigation" aria-label="main-toolbar">
        <template #start>
          <a href="#" class="flex align-items-center gap-2 no-underline text-color">
            <img
              src="https://placehold.co/40x40/png"
              alt="FutbolPeruano logo"
              width="40"
              height="40"
              class="border-circle"
            />
            <span class="text-xl font-bold">{{ t('brand') }}</span>
          </a>
        </template>
        <template #end>
          <language-switcher aria-label="language-switcher" />
        </template>
      </pv-toolbar>
    </header>

    <main class="flex-1">
      <slot name="content" />
    </main>

    <footer-content />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './language-switcher.component.vue'
import FooterContent from './footer-content.component.vue'
const { t } = useI18n()
</script>