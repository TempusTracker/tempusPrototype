import { ErrorAnimate, setErrorAnimate } from "../../App";

export function closePopup(e) {
  e.target.style.cssText = "animation-name:PopupClouse;";
  setTimeout(() => {
    setErrorAnimate("");
  }, 500);
}

export function createPopup() {
  setTimeout(() => {
    if (document.getElementById("popupError") != null) {
      document.getElementById("popupError").style.cssText =
        "animation-name:PopupClouse;";
      setTimeout(() => {
        setErrorAnimate("");
        console.log(ErrorAnimate);
      }, 500);
    }
  }, 3000);
  return (
    <div id="popupError" className="App-popup" onClick={closePopup}>
      {ErrorAnimate}
    </div>
  );
}
