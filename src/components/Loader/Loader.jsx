import { PropagateLoader } from "react-spinners";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loaderBackdrop}>
      <PropagateLoader
        loading
        size={15}
        speedMultiplier={1}
        color={"var(--purple)"}
      />
    </div>
  );
};

export default Loader;