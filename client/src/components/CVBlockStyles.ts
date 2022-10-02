import styled from "styled-components";
import { COLORS } from "../constants";
import { smallTextStyles } from "../styledPresets";

const COLUMN_CONTAINER_PADDING = 12;
const DATE_WIDTH = 60;
const INFO_CIRCLE_MARGIN = 12;
const INFO_CIRCLE_DIAMETER = 12;

const CV_LINE_ABSOLUTE_OFFSET =
  COLUMN_CONTAINER_PADDING +
  DATE_WIDTH +
  INFO_CIRCLE_MARGIN +
  INFO_CIRCLE_DIAMETER / 2;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CVContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${COLUMN_CONTAINER_PADDING}px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const CVLine = styled.div`
  position: absolute;
  left: ${CV_LINE_ABSOLUTE_OFFSET}px;
  display: flex;
  width: 3px;
  height: 100%;
  background-color: ${COLORS.secondaryColor};
`;

export const InfoCircle = styled.div`
  flex: none;
  margin: 0 ${INFO_CIRCLE_MARGIN}px;
  width: ${INFO_CIRCLE_DIAMETER}px;
  height: ${INFO_CIRCLE_DIAMETER}px;

  z-index: 999;
  border-radius: 10px;
  background-color: ${COLORS.primaryDark};

  border: 1px ${COLORS.secondaryColor} solid;
`;

export const CVDate = styled.span`
  flex: none;
  width: ${DATE_WIDTH}px;
  text-align: center;
  ${smallTextStyles};
`;

export const CVInfo = styled.span`
  padding: 12px 0;
  ${smallTextStyles};
`;
