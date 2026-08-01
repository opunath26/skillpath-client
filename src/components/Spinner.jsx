import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  background-color: transparent;

  .loader {
    width: fit-content;
    font-weight: 800;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    /* Teal #0D9488 Theme Gradient */
    background: radial-gradient(circle closest-side, #0D9488 94%, #0000) right/calc(200% - 1em) 100%;
    animation: l24 1s infinite alternate linear;
  }

  .loader::before {
    content: "Loading...";
    line-height: 1.2em;
    color: transparent;
    background: inherit;
    background-image: radial-gradient(circle closest-side, #0f172a 94%, #0D9488);
    -webkit-background-clip: text;
    background-clip: text;
  }

  @keyframes l24 {
    100% {
      background-position: left;
    }
  }
`;

export default Spinner;