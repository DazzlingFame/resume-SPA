import React, { useState } from "react";
import "../screen/Resume.css";
import "./WorkContent.css";
import InfoBlock from "./infoBlock";
import { Images, WorkTexts } from "../constants";
import {revealedInViewport} from "../hocs/revealedInViewport";

const WORK_CONTENT_TYPE_KEY = "WORK_CONTENT_TYPE_KEY";

enum ContentType {
  TESTER = "TESTER",
  DEVELOPER = "DEVELOPER",
}

type Props = {
  texts: WorkTexts;
};

const WorkContent: React.FC<Props> = (props) => {
  const [content, setContent] = useState(
    localStorage.getItem(WORK_CONTENT_TYPE_KEY) || ContentType.DEVELOPER
  );

  const navigationConfig: Array<{ text: string; type: ContentType }> = [
    { text: props.texts.testing.header, type: ContentType.TESTER },
    { text: props.texts.development.header, type: ContentType.DEVELOPER },
  ];

  const onContentTabChanged = (type: ContentType) => {
    setContent(type);
    localStorage.setItem(WORK_CONTENT_TYPE_KEY, type);
  };

  const navigationLinks = navigationConfig.map((item) => (
    <div
      className={
        content === item.type
          ? "navigation_link_container navigation_link_container_selected"
          : "navigation_link_container"
      }
      onClick={() => onContentTabChanged(item.type)}
      key={item.text}
    >
      <p className={"small_text"}>{item.text}</p>
    </div>
  ));

  let contentComponent;

  switch (content) {
    case ContentType.DEVELOPER: {
      contentComponent = (
        <InfoBlock
          key="work"
          texts={props.texts.development}
          photos={[
            Images.ORDERS_MAP_IMG,
            Images.DLIMS_IMG,
            Images.ORDERS_BOARD,
          ]}
          imageSource={Images.WORK_ME_IMG}
        />
      );
      break;
    }
    case ContentType.TESTER: {
      contentComponent = (
        <InfoBlock
          key="testing"
          texts={props.texts.testing}
          photos={[Images.ALLURE_IMG, Images.E2E_STEP_IMG]}
          imageSource={Images.WORK_ME_IMG}
        />
      );
      break;
    }
  }

  return (
    <>
      <p className={"bold_subheader_text"}>{props.texts.header}</p>
      <div className={"navigation_container"}>
        <div className={"navigation_links_container"}>{navigationLinks}</div>
        <div className={"divider"} />
      </div>
      <div className={"content_container"}>
        {contentComponent}
      </div>
    </>
  );
};

export default revealedInViewport<Props>('WorkContent')(WorkContent);
