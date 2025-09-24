import { reactive, readonly } from 'vue'
import { getContactsResource } from '../infrastructure/contacts-api.js'
import { toContact } from '../infrastructure/contact.assembler.js'

const state = reactive({ items: [], loading: false, error: null })
export function useContactStore() {
  async function load() {
    state.loading = true
    state.error = null
    try {
      const resources = await getContactsResource()
      state.items = resources.map(toContact)
    } catch (err) {
      state.error = err?.message ?? String(err)
      state.items = []
    } finally {
      state.loading = false
    }
  }
  return { state: readonly(state), load }
}