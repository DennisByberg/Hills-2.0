// scss
import "./Toggle.scss";
// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/darkModeSlice";
import { RootState } from "../../redux/store";

function Toggle() {
  const darkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();

  function handleToggle(): void {
    dispatch(toggleDarkMode());
    console.log(darkMode);
  }

  return (
    <section>
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} />
        <span className="slider round"></span>
      </label>
    </section>
  );
}
export default Toggle;
