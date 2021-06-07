import styled from "styled-components";
import {COLORS} from "../constants";

type SelectorContainerProps = {
    isOpened?: boolean;
};

export const SelectorContainer = styled.div<SelectorContainerProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    margin-top: 8px;
    padding: ${props => props.isOpened ? 4 : 0}px;
    border-radius: 8px;
    background-color: ${COLORS.secondaryColor};
  
    overflow: hidden;
    max-height: ${props => props.isOpened ? 100 : 0}px;
    transition: max-height 300ms, padding 300ms;
`
