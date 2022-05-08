import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        /* background-color: 'red'; */
      }

      body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      #root {
        min-height: 100%;
        min-width: 100%;
      }

      p,
      label {
        font-family: Georgia, Times, 'Times New Roman', serif;
        line-height: 1.5em;
      }

      input,
      select {
        font-family: inherit;
        font-size: inherit;
      }
    `}
  />
);
