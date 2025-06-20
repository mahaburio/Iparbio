import { useEffect } from "react";

const SidebarComponent = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const customizeSec = document.querySelector("#customizeSec");
      const allBtn = document.querySelectorAll(".allBtn");
      const closeBtn = document.querySelector(".close-menu");
      const groupList = document.querySelectorAll(".group-list");

      if (!customizeSec || !closeBtn || groupList.length === 0) return;

      // === Sidebar Logic ===
      allBtn.forEach((alb) => {
        alb.addEventListener("click", (event) => {
          customizeSec.style.left = "0px";
          document.body.style.overflow = "hidden";
          event.stopPropagation();
        });
      });

      closeBtn.addEventListener("click", () => {
        hideCustomizeSec();
      });

      document.addEventListener("click", (event) => {
        if (
          !customizeSec.contains(event.target) &&
          !event.target.classList.contains("allBtn")
        ) {
          hideCustomizeSec();
        }
      });

      function hideCustomizeSec() {
        customizeSec.style.left = "-100%";
        document.body.style.overflow = "auto";
      }

      // === Accordion Logic ===
      const handleAccordions = () => {
        const screenWidth = window.innerWidth;

        groupList.forEach((group, index) => {
          const listBody = group.querySelector(".list-body");

          if (screenWidth > 991) {
            group.classList.add("activeList");
            listBody.style.maxHeight = listBody.scrollHeight + "px";
          } else {
            if (index === 0) {
              group.classList.add("activeList");
              listBody.style.maxHeight = listBody.scrollHeight + "px";
            } else {
              group.classList.remove("activeList");
              listBody.style.maxHeight = "0px";
            }
          }
        });
      };

      handleAccordions();
      window.addEventListener("resize", handleAccordions);

      groupList.forEach((group) => {
        const header = group.querySelector(".header");
        const listBody = group.querySelector(".list-body");

        header.addEventListener("click", () => {
          const screenWidth = window.innerWidth;
          const isActive = group.classList.contains("activeList");

          if (screenWidth > 991) {
            group.classList.toggle("activeList");
            listBody.style.maxHeight = isActive ? "0px" : listBody.scrollHeight + "px";
          } else {
            groupList.forEach((item) => {
              if (item !== group) {
                item.classList.remove("activeList");
                item.querySelector(".list-body").style.maxHeight = "0px";
              }
            });

            group.classList.toggle("activeList");
            listBody.style.maxHeight = isActive ? "0px" : listBody.scrollHeight + "px";
          }
        });

        // === Active Bullet Toggle Logic ===
        const groupList = document.querySelectorAll(".group-list");

        groupList.forEach((group) => {
          const listBody = group.querySelector(".list-body");
          const listItems = listBody.querySelectorAll("li");

          listItems.forEach((item) => {
            item.addEventListener("click", () => {
              // Only affect bullets within this group
              group.querySelectorAll(".input-bullet").forEach((bullet) => {
                bullet.classList.remove("active-bullet");
              });

              item.querySelector(".input-bullet")?.classList.add("active-bullet");
            });
          });
        });

      });

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleAccordions);
      };
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Sidebar Customize Sec */}

      <div className="customize-sec" id="customizeSec">
        <div className="close-menu">
          <i className="ri-close-large-line"></i>
        </div>
        <div className="">
          <button className="gray-btn fw-medium w-75 mt-2 text-start">
            New Products
          </button>
          <button className="gray-btn fw-medium w-75 mt-2 text-start">
            Special Offers
          </button>
          <button className="gray-btn fw-medium w-75 mt-2 text-start">
            Bestsellers
          </button>

          <div className="sort-by group-list mt-2 active-group-list">
            <div
              className="header d-flex align-items-center justify-content-between"
            >
              <div className="name fw-medium">Sort by</div>
              <div className="arrow">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="list-body">
              <li>
                <div className="input-bullet active-bullet"></div>
                Featured
              </li>
              <li>
                <div className="input-bullet"></div>
                Bestselling
              </li>
              <li>
                <div className="input-bullet"></div>
                Name
              </li>
              <li>
                <div className="input-bullet"></div>
                Lowest Price
              </li>
              <li>
                <div className="input-bullet"></div>
                Highest Price
              </li>
            </div>
          </div>

          <div className="benefits group-list mt-2">
            <div
              className="header d-flex align-items-center justify-content-between"
            >
              <div className="name fw-medium">Benefits</div>
              <div className="arrow">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="list-body">
              <li>
                <div className="input-bullet active-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/mood.svg" alt="" />
                  Mood</span >
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" />
                  Hormone,Sleep</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span className="list-nm"
                ><img className="ct-img" src="../images/bed.svg" alt="" /> View
                  all Products</span>
              </li>
            </div>
          </div>

          <div className="category group-list mt-2">
            <div
              className="header d-flex align-items-center justify-content-between"
            >
              <div className="name fw-medium">Category</div>
              <div className="arrow">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="list-body">
              <li>
                <div className="input-bullet active-bullet"></div>
                <span
                ><img
                    className="ct-img"
                    src="../images/nutrations.svg"
                    alt=""
                  />
                  Nutrtions</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img
                    className="ct-img"
                    src="../images/personal-care.svg"
                    alt=""
                  />
                  Personal Care</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  Women's health</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  Eco-home</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  All</span>
              </li>
            </div>
          </div>

          <div className="brand group-list mt-2">
            <div
              className="header d-flex align-items-center justify-content-between"
            >
              <div className="name fw-medium">Brand</div>
              <div className="arrow">
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="list-body">
              <li>
                <div className="input-bullet active-bullet"></div>
                <span
                ><img
                    className="ct-img"
                    src="../images/nutrations.svg"
                    alt=""
                  />
                  Nutrivero</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img
                    className="ct-img"
                    src="../images/personal-care.svg"
                    alt=""
                  />
                  Suncella</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  HUNAI</span>
              </li>

              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  Vertal Orbis</span>
              </li>
              <li>
                <div className="input-bullet"></div>
                <span
                ><img className="ct-img" src="../images/w-health.svg" alt="" />
                  All</span>
              </li>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SidebarComponent;
