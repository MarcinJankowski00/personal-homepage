import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../images/spinner.svg"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(Spinner)`
    margin-top: 40px;
    animation: ${rotate} 1.2s linear infinite;
`;