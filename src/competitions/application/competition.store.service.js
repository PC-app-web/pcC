/**
 * summary: Simple reactive store handling competitions lifecycle.
 * author: <Your Name>
 */
import { reactive, readonly } from 'vue'
import { getCompetitionsResource } from '../infrastructure/competitions-api.js'
import { toCompetition } from '../infrastructure/competition.assembler.js'

const state = reactive({
  items: [],
  loading: false,
  error: null
})

export function useCompetitionStore() {
  async function load() {
    state.loading = true
    state.error = null
    try {
      const resources = await getCompetitionsResource()
      state.items = resources.map(toCompetition)
    } catch (err) {
      state.error = err?.message ?? String(err)
      state.items = []
    } finally {
      state.loading = false
    }
  }

  return {
    state: readonly(state),
    load
  }
}