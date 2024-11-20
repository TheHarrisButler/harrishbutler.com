import { Global as EmotionGlobal, css } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <EmotionGlobal
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;500;600;700&display=swap");

        * {
          font-family: IBM Plex Sans, sans-serif;
          font-size: 16px;
        }

        html,
        body {
          display: flex;
          flex-direction: column;
          background-color: #292929;
          min-height: 100vh;
          color: white;
          padding: 0;
          margin: 0;
        }
      `}
    />
  );
};
