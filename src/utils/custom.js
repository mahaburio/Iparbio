import { useEffect } from "react";

//  Tabs Initialize Exported

export function tabsInitialize() {
  const tabs = document.querySelectorAll(".list-header .item");
  const listBodies = document.querySelectorAll(".list-body .list-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      listBodies.forEach((body) => body.classList.remove("active"));

      this.classList.add("active");
      const target = this.getAttribute("data-target");
      const activeBody = document.querySelector(`.${target}-list-body`);
      if (activeBody) {
        activeBody.classList.add("active");
      }
    });
  });
}

// LogoSlide Playing & Pause for HomePage

export function useLogoSlidePausePlay() {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    const playPauseBtn = document.querySelector("#playPauseBtn");

    if (!logosSlide || !playPauseBtn) return;

    // Duplicate content for infinite effect
    logosSlide.innerHTML += logosSlide.innerHTML;

    const toggleAnimation = () => {
      const isPaused = logosSlide.style.animationPlayState === "paused";
      logosSlide.style.animationPlayState = isPaused ? "running" : "paused";
      playPauseBtn.classList.toggle("paused", !isPaused);
    };

    playPauseBtn.addEventListener("click", toggleAnimation);

    // Cleanup
    return () => {
      playPauseBtn.removeEventListener("click", toggleAnimation);
    };
  }, []);
}

// About Items Toggling Effect

export function aboutItemsToggle() {
  const aboutItems = document.querySelectorAll(".about-item");

  aboutItems.forEach((item) => {
    item.addEventListener("click", () => {
      aboutItems.forEach((about) => {
        about.style.opacity = "0.3";
      });

      item.style.opacity = "1";
    });
  });
}
