import styles from "/src/styles/main.scss";

import OutherInit from "/src/scripts/outher.js";
import { Quiz, resultsTexts, levels } from "/src/scripts/quiz.js";
import Tip from "/src/scripts/tip.js";
import Video from "/src/scripts/video.js";
import Modals from "/src/scripts/modals.js";
import Observer from "/src/scripts/observer.js";
import SlidersInit from "/src/scripts/slidersInit.js";
import FormInit from "/src/scripts/sendForm.js";

document.addEventListener("DOMContentLoaded", () => {
  OutherInit();
  Tip.init();
  Video.init();

  Quiz.init("#email-form-3", {
    resultsTexts,
    levels
  });

  let modals = Modals.init({
    closeSelector: ".closure_link"
  });

  Observer.init([
    Modals.onMutation || (() => {}),
    Tip.onMutation || (() => {}),
    Video.onMutation || (() => {}),
    Quiz.onMutation || (() => {}),
    Quiz.onMutation || (() => {}),
  ]);

  SlidersInit();
  FormInit();

  let exitModalDontOpened = true;
  document.addEventListener("mouseout", e => {
    if (exitModalDontOpened && !e.relatedTarget) {
      exitModalDontOpened = false;
      modals.openModal("exit")
    }
  })
});