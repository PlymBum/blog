export default class ApiBlog {
  _apiBaseURL = 'https://blog.kata.academy/api'

  getArticles = async (offset = 0) => {
    const response = await fetch(`${this._apiBaseURL}/articles?limit=20&offset=${offset}`)
    if (response.ok) {
      const body = response.json()
      return body
    }
    throw new Error('fetching articles error')
  }
}
