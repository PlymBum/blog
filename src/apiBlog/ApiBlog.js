export default class ApiBlog {
  // _apiBaseURL = 'https://blog.kata.academy/api'
  _apiBaseURL = 'https://api.realworld.io/api'

  // eslint-disable-next-line default-param-last
  getArticles = async (offset = 0, token = '') => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    }

    const response = await fetch(`${this._apiBaseURL}/articles?limit=20&offset=${offset}`, options)
    if (response.ok) {
      const body = response.json()
      return body
    }
    throw new Error('fetching articles error')
  }

  registerUser = async (username, email, password) => {
    const user = {
      user: {
        username,
        email,
        password,
      },
    }
    const response = await fetch(`${this._apiBaseURL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    const err = await response.json()

    throw new Error('Error register', { cause: err })
  }

  userLogin = async (email, password) => {
    const user = {
      user: {
        email,
        password,
      },
    }
    const response = await fetch(`${this._apiBaseURL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    const err = await response.json()

    throw new Error('Error login', { cause: err })
  }

  getUserInfo = async (token) => {
    const response = await fetch(`${this._apiBaseURL}/user`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    const err = await response.json()

    throw new Error('user not difine', { cause: err })
  }

  updateUser = async (token, username, email, password, image) => {
    const user = {
      user: {
        email,
        username,
        bio: '',
        image,
      },
    }

    if (password !== '') user.password = password

    const response = await fetch(`${this._apiBaseURL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(user),
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    const err = await response.json()

    throw new Error('update error', { cause: err })
  }

  getArticle = async (slug) => {
    const response = await fetch(`${this._apiBaseURL}/articles/${slug}`)
    if (response.ok) {
      const body = response.json()
      return body
    }
    throw new Error('fetching article error')
  }

  createArticle = async (data, token) => {
    const article = {
      article: {
        ...data,
      },
    }
    const response = await fetch(`${this._apiBaseURL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    throw new Error('create article error')
  }

  updateArticle = async (slug, data, token) => {
    const article = {
      article: {
        ...data,
      },
    }
    const response = await fetch(`${this._apiBaseURL}/articles/${slug}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(article),
    })
    if (response.ok) {
      const body = response.json()
      return body
    }
    throw new Error('update article error')
  }

  deleteArticle = async (token, slug) => {
    const response = await fetch(`${this._apiBaseURL}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    if (!response.ok) throw new Error('delete article error')
  }

  toogleFavorite = async (slug, token, bool) => {
    const method = bool ? 'DELETE' : 'POST'
    const response = await fetch(`${this._apiBaseURL}/articles/${slug}/favorite`, {
      method,
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    if (!response.ok) {
      throw new Error('error toogle favorite')
    }
  }
}
