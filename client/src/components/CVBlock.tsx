import React from "react";
import styled from "styled-components";
import { COLORS, CVTexts } from "../constants";
import { smallTextStyles } from "../styledPresets";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CVContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const CVLine = styled.div`
  display: flex;
  width: 3px;
  background-color: ${COLORS.secondaryColor};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(-20px);
`;

const InfoCircle = styled.div`
  margin-right: 12px;
  width: 11px;
  height: 11px;
  border-radius: 10px;
  background-color: ${COLORS.primaryDark};

  border: 1px ${COLORS.secondaryColor} solid;
`;

const CVInfo = styled.span`
  padding: 12px 0;
  ${smallTextStyles};
`;

type Props = {
  CVData: CVTexts;
};

export const CVBlock: React.FC<Props> = ({ CVData: { data, header } }) => (
  <Container>
    {!!header && <p className={"bold_subheader_text"}>{header}</p>}
    <CVContainer>
      <ColumnContainer>
        {data.map((item) => (
          <CVInfo>{item.year}</CVInfo>
        ))}
      </ColumnContainer>
      <CVLine />
      <ColumnContainer>
        {data.map((item) => (
          <InfoContainer>
            <InfoCircle />
            <CVInfo>{item.info}</CVInfo>
          </InfoContainer>
        ))}
      </ColumnContainer>
    </CVContainer>
  </Container>
);
