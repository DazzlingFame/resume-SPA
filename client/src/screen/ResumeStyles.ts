import styled from "styled-components";
import {cssMedia} from "../utils/useMedia";

export const RootContainer = styled.div`
  display: flex;
  position: relative;
  color: white;
  width: 100%;
  min-width: 375px;
  background-color: var(--primaryDark);
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 20px 5%;
  flex-direction: column;
  max-width: 1200px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  ${cssMedia.mobile} {
    margin-right: 0;
    margin-bottom: 12px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${cssMedia.mobile} {
    align-items: flex-end;
    flex-direction: column;
  };
`;

export const NavigationLinkContainer = styled.div`
  margin-right: 16px;
  color: var(--secondaryColor);
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  ${cssMedia.mobile} {
    margin-right: 0;
    margin-bottom: 12px;
  };
  &:hover {
    background-color: var(--primaryColor);
  }
`;
