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

