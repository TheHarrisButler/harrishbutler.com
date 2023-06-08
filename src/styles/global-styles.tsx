import { Global as EmotionGlobal, css } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <EmotionGlobal
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap");

        * {
          font-family: IBM Plex Sans, sans-serif;
          font-size: 16px;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          background-color: #292929;
          color: white;
          min-height: 100%;
          padding: 0;
          margin: 0;
        }
        h1 {
        }
      `}
    />
  );
};
