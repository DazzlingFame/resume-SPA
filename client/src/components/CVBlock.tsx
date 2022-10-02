import React from "react";
import { CVTexts } from "../constants";
import {
  ColumnContainer,
  Container,
  CVContainer,
  CVDate,
  CVInfo,
  CVLine,
  DataContainer,
  InfoCircle,
} from "./CVBlockStyles";

type Props = {
  CVData: CVTexts;
};

export const CVBlock: React.FC<Props> = ({ CVData: { data, header } }) => (
  <Container>
    {!!header && <p className={"bold_subheader_text"}>{header}</p>}
    <CVContainer>
      <ColumnContainer>
        {data.map((item) => (
          <DataContainer>
            <CVDate>{item.year}</CVDate>
            <InfoCircle />
            <CVInfo>{item.info}</CVInfo>
          </DataContainer>
        ))}
      </ColumnContainer>
      <CVLine />
    </CVContainer>
  </Container>
);
