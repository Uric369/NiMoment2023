import "../css/WordCloudModal.css";
import RoundedButton from "./RoundedButton";
import LoadingSpinner from "./LoadingSpinner";
import { getBlob, wordcloudApi } from "../apis";

import { useSelector } from "react-redux";
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
      console.error
    );
  }, [isLoading]);

  function downloadWordCloud() {
    const link = document.createElement("a");
    link.href = imageRef.current.src;
    link.download = "wordcloud.png";
    link.click();
  }

  return (
    <div className="modal-skeleton">
      <div className="modal-container">
        <div className="wordcloud-container">
          {isLoading && <LoadingSpinner />}
          <img
            style={{
              height: "35vh",
              display: isLoading ? "none" : "block",
            }}
            ref={imageRef}
          />
        </div>
        <div className="button-panel">
          {
            <RoundedButton
              buttonText="保存词云 💾"
              extraClassName="rounded-button-save"
              onClick={downloadWordCloud}
            ></RoundedButton>
          }
          <div className="modal-close-click" onClick={onClose}>
            关闭
          </div>
        </div>
      </div>
    </div>
  );
}
