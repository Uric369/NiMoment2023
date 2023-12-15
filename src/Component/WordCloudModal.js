import "../css/WordCloudModal.css";
import RoundedButton from "./RoundedButton";
import LoadingSpinner from "./LoadingSpinner";
import { getRequest, getBlob, wordcloudApi } from "../apis";

import { useState, useEffect, useRef } from "react";

export default function WordCloudModal(props) {
  const { onClose } = props;
  const imageRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlob(
      wordcloudApi,
      (res) => {
        const url = URL.createObjectURL(res);
        imageRef.current.src = url;
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      },
      (err) => {
        console.error(err);
      }
    );
  }, [isLoading]);

  return (
    <div className="modal-skeleton">
      <div className="modal-container">
        <div className="wordcloud-container">
          {isLoading && <LoadingSpinner />}
          <img
            style={{ height: "35vh", display: isLoading ? "none" : "block" }}
            ref={imageRef}
          />
        </div>
        <div className="button-panel">
          <RoundedButton
            buttonText="保存词云 💾"
            extraClassName="rounded-button-save"
          ></RoundedButton>
          <div className="modal-close-click" onClick={onClose}>
            关闭
          </div>
        </div>
      </div>
    </div>
  );
}
