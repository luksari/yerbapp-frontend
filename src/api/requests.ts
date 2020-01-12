import { SERVER_URL } from 'config/url';

export class HttpError extends Error {
  constructor(
    public statusText: string,
    public response: any,
    public status: number,
  ) {
    super(statusText);
  }
}

const getDefaultHeaders = (isMultipart: boolean, isAuthorized: boolean) => {
  const headers = {
    Accept: 'application/json',
    Authorization: '',
  };

  if (!isMultipart) {
    headers['Content-Type'] = 'application/json';
  }
  if (isAuthorized) {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return headers;
};

const parseResponse = async <T>(response: Response): Promise<null | T> => {
  try {
    const textResponse = await response.text();
    if (textResponse) {
      return JSON.parse(textResponse);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const apiRequest = async <T>(path: string, fetchOptions?: RequestInit, isMultipart = false, isAuthorized = false): Promise<T | null> => {
  const normalizedPath = path.replace(/^\//, '');
  const url = `${SERVER_URL}/${normalizedPath}`;
  const fetchResponse = await fetch(url, {
    ...fetchOptions,
    headers: {
      ...(fetchOptions && fetchOptions.headers),
      ...getDefaultHeaders(isMultipart, isAuthorized),
    },
  });
  const parsedResponse = await parseResponse<T>(fetchResponse);

  if (fetchResponse.status >= 200 && fetchResponse.status < 300) {
    return parsedResponse;
  }

  throw new HttpError(fetchResponse.statusText, parsedResponse, fetchResponse.status);
};

export const getRequest = async <T>(path: string, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  method: 'GET',
});

export const postRequest = async <T>(path: string, body?: Record<string, any>, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  body: body && JSON.stringify(body),
  method: 'POST',
});

export const postFormDataRequest = async <T>(path: string, body?: FormData, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  body,
  method: 'POST',
}, true, true);

export const patchRequest = async <T>(path: string, body?: Record<string, any>, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  body: body && JSON.stringify(body),
  method: 'PATCH',
});

export const putRequest = async <T>(path: string, body?: Record<string, any>, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  body: body && JSON.stringify(body),
  method: 'PUT',
});

export const deleteRequest = async <T>(path: string, fetchOptions?: RequestInit) => apiRequest<T>(path, {
  ...fetchOptions,
  method: 'DELETE',
});
