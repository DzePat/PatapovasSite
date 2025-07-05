import styled from "styled-components"

const LoadingSVG = styled.svg`
    position: absolute;
    top: 40%;
    right: 40%;
    width: 20%;
    height: 20%;
    fill: none;
    stroke: black;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation: spin 1s linear infinite;
    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
`

export function Loading() {

    return(
        <LoadingSVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
          <path d="M21 12a9 9 0 1 1-3.17-6.83" />
          <polyline points="21 3 21 9 15 9" />
      </LoadingSVG>
    )
}