// fetch the data from the api

import config from './config';
import axios from 'axios';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const getApiUrl = contestId => {
    if (contestId) {
        return `${config.serverUrl}/api/contests/${contestId}`;
    }

    return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
    if (contestId) {
        return {
            currentContestId: apiData.id,
            contests: {
                [apiData.id]: apiData
            }
        };
    }

    return {
        contests: apiData.contests
    };
};

const serverRender = (contestId) => {

  return axios.get(getApiUrl(contestId)).then(resp => {
    const initialData = getInitialData(contestId, resp.data);

    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
      ),
      initialData: initialData
    };
  });
};

export default serverRender;
