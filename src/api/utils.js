export const generateQueryParams = (url, queryParams) => {
  let urlWithParams = `${url}?`
  Object.keys(queryParams).forEach((key, index) => {
    const paramsElement = queryParams[key]
    if (paramsElement || paramsElement === false || paramsElement === 0) {
      let param = ''
      if (typeof paramsElement === 'object') {
        paramsElement.forEach((value, i) => {
          param += getAdjustedParameter(i, paramsElement, `${key}=${value}`)
        })
      } else {
        param = `${key}=${paramsElement}`
      }
      urlWithParams += getAdjustedParameter(index, queryParams, param)
    }
  })

  return urlWithParams
}

const getAdjustedParameter = (index, params, value) => {
  return Object.keys(params).length === index + 1 ? value : `${value}&`
}

export const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}
export const fetchOptions = function(method = 'GET', token) {
  return {
    // eslint-disable-next-line object-shorthand
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + `${token}`,
    },
  }
}

// export default generateQueryParams;
