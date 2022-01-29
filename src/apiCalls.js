const key = process.env.REACT_APP_API_KEY;

export const fetchPlayers = await fetch('https://the-one-api.dev/v2/character', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': key
  }
})

export const fetchQuotes = await fetch('https://the-one-api.dev/v2/quote/${id}', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'Authorization': key
  }
})