function parseJSON(response: any): any {
  return response.json()
}

function checkStatus(response: any): any {
  if (response.status >= 200 && response.status <= 300) {
    return response
  }
  if (response.status === 401) {
    return response
  }
  const error: any = new Error(response.statusText)
  error.response = response
  throw error
}

export function request(url: any, options: any): any {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}