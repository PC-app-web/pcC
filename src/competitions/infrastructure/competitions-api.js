/**
 * summary: Axios resource client for competitions (episodes of show id 1).
 * author: <Your Name>
 */
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.tvmaze.com',
  timeout: 15000
})

/** GET /shows/1/episodes */
export async function getCompetitionsResource() {
  const { data } = await api.get('/shows/1/episodes')
  return data
}

export default api