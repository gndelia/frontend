import 'isomorphic-fetch';

const DEFAULT_API_ROOT = `${window.location.protocol}//${window.location.host}`;

function buildHeaders(method, content, isAuth, token) {

  const fetchHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  if (isAuth) {
    fetchHeaders.Authorization = `Bearer ${token}`;
  }

  return {
    method,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(content),
    headers: fetchHeaders
  };
}

function request(method, types, endpoint, content, options) {

  let token = null;

  if ((options != null) && ('token' in options)) {
    token = options.token;
  }

  let isAuth = false;

  if (token !== null && token !== undefined) {
    isAuth = true;
  }

  const headers = buildHeaders(method, content, isAuth, token);
  const endpointURL = DEFAULT_API_ROOT + endpoint;

  return {
    types,
    endpoint: endpointURL,
    headers,
  }

}

class Fetch {

  static GET(endpoint, types, options) {
    return request('GET', types, endpoint, null, options);
  }

  static POST(endpoint, types, content, options) {
    return request('POST', types, endpoint, content, options);
  }

  static PUT(endpoint, types, content, options) {
    return request('PUT', types, endpoint, content, options);
  }

  static DELETE(endpoint, types, content, options) {
    return request('DELETE', types, endpoint, content, options);
  }

}

export default Fetch;
