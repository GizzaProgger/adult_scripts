const videoObjFactory = () => {
  let o = {
    init() {
      if (!document.querySelectorAll("[data-set-video]")) return
      document.querySelectorAll("[data-set-video]").forEach(el => {
        el.addEventListener("click", e => {
          console.log(el.dataset.setVideo)
          document.querySelector(".block-lbock_video video").setAttribute("src", el.dataset.setVideo)
        })
      })
      if (!document.querySelector(".block-lbock_video")) return;
      document.querySelector(".block-lbock_video").addEventListener("click", e => {
        let container = document.querySelector(".block-lbock_video");
        let media = container.querySelector("video");
        if (media.paused) {
          container.querySelector(".link-video-lbock").style.opacity = "0";
          media.play();
        } else {
          media.pause();
        }
        media.addEventListener("pause", () => {
          container.querySelector(".link-video-lbock").style.opacity = "1";
        })
      })
    }
  }
  return o;
}

export default videoObjFactory();