import React, { useState } from "react";
import "../screen/Resume.css";
import "./WorkContent.css";
import InfoBlock from "./infoBlock";
import {Images, WorkTexts} from "../constants";
import {revealedInViewport} from "../hocs/revealedInViewport";

const WORK_CONTENT_TYPE_KEY = "WORK_CONTENT_TYPE_KEY";

enum ContentType {
  TESTER = "TESTER",
  DEVELOPER = "DEVELOPER",
}

type Props = {
  texts: WorkTexts;
  containerRef: React.RefObject<HTMLDivElement>;
};

const WorkContent: React.FC<Props> = ({ texts, containerRef }) => {
  const [content, setContent] = useState(
    localStorage.getItem(WORK_CONTENT_TYPE_KEY) || ContentType.DEVELOPER
  );

  const navigationConfig: Array<{ text: string; type: ContentType }> = [
    { text: texts.testing.header, type: ContentType.TESTER },
    { text: texts.development.header, type: ContentType.DEVELOPER },
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
          texts={texts.development}
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
          texts={texts.testing}
          photos={[Images.ALLURE_IMG, Images.E2E_STEP_IMG]}
          imageSource={Images.WORK_ME_IMG}
        />
      );
      break;
    }
  }

  return (
    <div ref={containerRef}>
      <p className={"bold_subheader_text"}>{texts.header}</p>
      <div className={"navigation_container"}>
        <div className={"navigation_links_container"}>{navigationLinks}</div>
        <div className={"divider"} />
      </div>
      <div className={"content_container"}>{contentComponent}</div>
    </div>
  );
};

export default revealedInViewport<Props>("WorkContent")(WorkContent);
