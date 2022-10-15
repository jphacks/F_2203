const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists`
const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const ARTIST_ENDPOINT = `https://api.spotify.com/v1/artists`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
  })

  return response.json()
}

const getAccessTokenClientCredentials = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }).toString(),
  })

  return response.json()
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getArtistsByKeyword = async (keyword) => {
  const { access_token } = await getAccessTokenClientCredentials()
  const params = {
    q: keyword,
    type: 'artist',
    market: 'JP',
    limit: 5,
  }
  const query_params = new URLSearchParams(params)

  return fetch(SEARCH_ENDPOINT + `?` + query_params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getArtistById = async (id) => {
  const { access_token } = await getAccessTokenClientCredentials()

  return fetch(ARTIST_ENDPOINT + `/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getArtistsByIds = async (ids) => {
  const { access_token } = await getAccessTokenClientCredentials()

  const params = {
    ids: ids,
  }
  const query_params = new URLSearchParams(params)

  return fetch(ARTIST_ENDPOINT + `?` + query_params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
