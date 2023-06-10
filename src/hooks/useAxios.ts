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
        setError('Internal error, please talk to your administrator');
        throw new Error('Internal error, please talk to your administrator');
      }
      setLoading(true);
      try {
        const response = await baseRouter({
          method,
          url,
          data: params,
          headers: {},
        });

        if (response) {
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
