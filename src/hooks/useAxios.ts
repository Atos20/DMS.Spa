import { AxiosResponse, Method } from 'axios';
import { useState } from 'react';

import { baseRouter } from '../routes/router';

export enum REQUEST_METHOD {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
}

interface IAxiosParams<T> {
  method: Method;
  url?: string;
  params?: T;
}
export const useAxios = <T>({ method, url, params }: IAxiosParams<T>) => {
  const [response, setResponse] = useState<AxiosResponse<unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getResponseConstructor =
    <T>({ method, url, params }: IAxiosParams<T>) =>
    async () => {
      if (!url) {
        setError('Got bad news for you');
        throw new Error('Got bad news for you');
      }
      setLoading(true);
      try {
        const result = await baseRouter({
          method,
          url,
          data: params,
          headers: {
            Authorization: import.meta.env.VITE_AUTH_TOKEN,
          },
        });
        if (result) {
          setResponse(response as AxiosResponse<unknown>);
        }
        setError(null);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };

  return {
    response,
    error,
    loading,
    getResponse: getResponseConstructor({ method, url, params }),
  };
};
