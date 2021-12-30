import styled from "styled-components";
import {COLORS} from "../../constants";
import {regularText, smallTextStyles} from "../../styledPresets";
import chevronDown from "../../assets/images/chevron-down-24.png";

const CHEVRON_DOWN = {
    source: chevronDown,
    desc: "chevronDown",
};
type SelectorContainerProps = {
    isOpened?: boolean;
};

export const SelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
`;

export const SelectedItemContainer = styled.div`
    display: flex;
    border-radius: 8px;
    background-color: var(--secondaryColor);
    padding: 4px;
    align-items: center;
`;

export const SelectedItemText = styled.span`
    ${regularText};
    margin-right: 8px;
    color: white;
`;

export const SelectorChevron = styled.img.attrs({
    alt: CHEVRON_DOWN.desc,
    src: CHEVRON_DOWN.source,
})``;

export const SelectorItemsContainer = styled.div<SelectorContainerProps>`
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

export const SelectorItemContainer = styled.div`
    display: flex;
    flex: 1;
    border-radius: 4px;
    :hover {
        background-color: var(--secondaryLight);
    }
`;

export const SelectorItemText = styled.span`
    ${smallTextStyles};
    color: white;
    padding: 0 4px;
`;
