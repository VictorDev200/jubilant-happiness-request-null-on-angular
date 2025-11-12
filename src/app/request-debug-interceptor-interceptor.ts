import { HttpInterceptorFn } from '@angular/common/http';
import { inject, REQUEST } from '@angular/core';

export const requestDebugInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const request = inject(REQUEST, { optional: true });

  if (request) {
    console.log('[SSR] REQUEST found in DI:', request.headers?.get('cookie'));
  } else {
    console.log('[SSR] REQUEST is null or not provided.');
  }

  return next(req);
};
