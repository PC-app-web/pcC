import axios from 'axios'
const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com', timeout: 15000 })
export async function getContactsResource() {
    const { data } = await api.get('/users');
    return data
}
export default api