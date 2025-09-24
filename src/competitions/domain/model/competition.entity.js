/**
 * summary: Competition entity capturing episode fields from API as domain model.
 * author: <Your Name>
 */
export class Competition {
  /**
   * @param {number} id
   * @param {string} name
   * @param {number} season
   * @param {number} number
   * @param {string} summary
   * @param {string} url
   * @param {number|null} ratingAverage
   * @param {string|null} imageUrl
   */
  constructor({ id, name, season, number, summary, url, ratingAverage = null, imageUrl = null }) {
    this.id = id
    this.name = name
    this.season = season
    this.number = number
    this.summary = summary
    this.url = url
    this.ratingAverage = ratingAverage
    this.imageUrl = imageUrl
  }
}