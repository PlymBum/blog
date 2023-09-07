export default class ApiTickets {
  _apiBaseURL = 'https://aviasales-test-api.kata.academy'

  getSearchId = async () => {
    const response = await fetch(`${this._apiBaseURL}/search`)
    const body = await response.json()
    return body.searchId
  }

  getTickets = async (searchId) => {
    const response = await fetch(`${this._apiBaseURL}/tickets?searchId=${searchId}`)
    return response
  }
}
