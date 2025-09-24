export class Contact {
  constructor({ id, name, email, city = '', company = '', website = '', rating = 0 }) {
    this.id = id
    this.name = name
    this.email = email
    this.city = city
    this.company = company
    this.website = website
    this.rating = rating
  }
}