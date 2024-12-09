import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios"

export interface InternalRequestInterceptor<T = AxiosResponse, R = unknown> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: R) => R
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: R) => R
}

export interface InternalRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: InternalRequestInterceptor<T>
  showLoading?: boolean
}

export interface RequestInterceptor<T = AxiosResponse, R = unknown> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: R) => R
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: R) => R
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: RequestInterceptor<T>
  showLoading?: boolean
}
