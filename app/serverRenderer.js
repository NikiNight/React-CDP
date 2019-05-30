import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './index';
import { StaticRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React CDP App</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700" rel="stylesheet">
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}


export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}