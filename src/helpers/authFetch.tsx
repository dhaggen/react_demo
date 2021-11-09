import React from 'react';
import fetch from 'isomorphic-fetch';

export const authFetch = (input: RequestInfo, init?: RequestInit, history?:any): Promise<Response> => {
    return fetch(input, init)
        .then(response => {
            if(response.status == 401 && history) {
                history.push('/login/');
            }
            return response;
        });
};