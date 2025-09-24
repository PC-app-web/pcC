/**
 * summary: Assembler mapping API resource to domain entity (Request/Response + Resource pattern).
 * author: <Your Name>
 */
import { Competition } from '../domain/model/competition.entity.js'

export function toCompetition(resource) {
  return new Competition({
    id: resource.id,
    name: resource.name,
    season: resource.season,
    number: resource.number,
    summary: resource.summary ?? '',
    url: resource.url,
    ratingAverage: resource?.rating?.average ?? null,
    imageUrl: resource?.image?.medium ?? resource?.image?.original ?? null
  })
}