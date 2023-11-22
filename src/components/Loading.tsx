import { loadingImage } from "../assets";
import style from "../styles/loading.module.css";
import LinearProgressBar from "./LinearProgressBar";

const Loading: React.FC = () => {
  return (
    <div className={style["container_load"]}>
      <div className="center">
        <img src={loadingImage} className={`${style["loading_picture"]}`} />
      </div>
      <div className="spacer"></div>
      <LinearProgressBar duration={60000} />
    </div>
  );
};

export default Loading;
