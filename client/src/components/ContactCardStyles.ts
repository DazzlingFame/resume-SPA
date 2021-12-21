import styled from "styled-components";
import { boldSubheaderTextStyles, regularText } from "../styledPresets";

export const ContactItemContainer = styled.a`
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  padding-bottom: 12px;
  color: var(--secondaryColor);
`;

export const ContactItemIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 12px;
  user-select: none;
`;

export const ContactItemText = styled.span`
  @media all and (max-width: 980px) {
    display: none;
  }
`;

export const ContactBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactBlockHeader = styled.p`
  ${boldSubheaderTextStyles};
`;

export const ContactCardContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  background-color: #344955;
  margin: 12px;
  border-radius: 12px;
`;

export const ContactName = styled.span`
  ${regularText};
  text-align: center;
`;

export const ContactPhoto = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  padding-bottom: 12px;
  align-self: center;
  user-select: none;
`;

export const ContactSideContainer = styled.div`
  display: inline-flex;
  padding: 24px 12px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
