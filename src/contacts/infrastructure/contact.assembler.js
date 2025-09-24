import { Contact } from '../domain/model/contact.entity.js'
export function toContact(resource) {
  const city = resource?.address?.city ?? ''
  const company = resource?.company?.name ?? ''
  const website = resource?.website ?? ''
  const rating = (Number(resource?.id) % 5) + 1
  return new Contact({ id: resource.id, name: resource.name, email: resource.email, city, company, website, rating })
}