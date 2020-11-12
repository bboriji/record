import axios from 'axios'
import useSWR from 'swr'

import { baseURL } from '../common/api'

// useRequest.js
export default function useRequest(request, config) {
  const requestWithBaseURL = {
    ...request,
    baseURL
  }

  const { data: response, error, isValidating, revalidate } = useSWR(
    JSON.stringify(requestWithBaseURL),
    () => axios(requestWithBaseURL),
    config
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
  };
}