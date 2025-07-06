import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import AccordionItem from './AccordionItem';
import '../../../styles/dashboard.css';

const menuStructure = [
  {
    icon: <FaBriefcase />,
    label: 'My Business',
    target: 'mybusinessmenu'
  },
  {
    icon: <FaUserPlus />,
    label: 'Enroll'
  },
  {
    icon: <FaShoppingCart />,
    label: 'Shop & Orders',
    target: 'shopOrdersMenu'
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45.871"
        height="45.632"
        viewBox="30.326 846.316 45.871 45.632"
      >
        <g data-name="Group 8661">
          <g data-name="Group 8658">
            <g
              data-name="Group 8657"
              transform="translate(29.803 846.317)"
              clip-path='url("#a")'
            >
              <path
                d="M24.99 45.631h-2.552c-2.057 0-3.708-1.411-3.922-3.353l-.073-.662c-3.302-.872-6.354-2.41-8.88-4.475l-.682.267a5.204 5.204 0 0 1-1.927.373c-1.438 0-2.709-.622-3.396-1.661l-2.526-3.812C0 30.756.579 28.805 2.401 27.67l.625-.385a17.304 17.304 0 0 1 0-8.944l-.604-.372C.584 16.83.006 14.865 1.042 13.304l2.526-3.812C4.25 8.457 5.516 7.84 6.948 7.84a5.14 5.14 0 0 1 1.912.372l.703.278c2.531-2.065 5.578-3.604 8.885-4.475l.068-.64C18.735 1.42 20.391 0 22.464 0h2.526c.448 0 .818.322.818.713v9.815a2.801 2.801 0 0 0-.828-.122c-7.86 0-14.25 5.567-14.25 12.41s6.39 12.41 14.25 12.41h.01c.286 0 .562-.04.818-.121v9.815c0 .39-.37.712-.818.712"
                fill="#d8d8dd"
                fill-rule="evenodd"
                data-name="Path 9131"
              />
            </g>
          </g>
          <g data-name="Group 8660">
            <g
              data-name="Group 8659"
              transform="translate(29.803 846.316)"
              clip-path='url("#b")'
            >
              <path
                d="M23.686 33.838h-.01c-6.59 0-11.956-4.933-11.956-10.997 0-6.065 5.36-10.999 11.957-10.999.424 0 .785.319.785.714v20.569c0 .395-.351.713-.776.713"
                fill="#d8d8dd"
                fill-rule="evenodd"
                data-name="Path 9132"
              />
              <path
                d="M26.011 2.054c9.953.936 18.019 7.809 19.945 16.694-2.711-1.84-7.12-3.303-12.214-4.156-1.318-6.665-4.2-11.47-7.73-12.461v-.077Zm20.275 18.76c.074.669.109 1.346.109 2.027 0 .68-.035 1.358-.109 2.026-1.964 2.016-6.69 3.725-12.277 4.71.325-2.103.503-4.37.503-6.736a44.27 44.27 0 0 0-.503-6.737c5.588.986 10.313 2.694 12.277 4.71m-.33 6.12c-1.926 8.885-9.992 15.758-19.945 16.693v-.08c3.53-.987 6.413-5.793 7.73-12.462 5.096-.85 9.504-2.316 12.215-4.151M26.01 42.037v-10.17a62.61 62.61 0 0 0 6.087-.527c-1.18 5.51-3.44 9.63-6.087 10.697m0-11.601v-15.19c2.153.086 4.305.29 6.374.595a42.06 42.06 0 0 1 .577 7c0 2.452-.207 4.815-.577 7-2.069.304-4.221.508-6.374.595m0-16.622V3.644c2.647 1.067 4.907 5.187 6.087 10.697a62.611 62.611 0 0 0-6.087-.527"
                fill="#d8d8dd"
                fill-rule="evenodd"
                data-name="Path 9133"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h26.318v45.304H0V0z" data-name="Rectangle 4066" />
          </clipPath>
          <clipPath id="b">
            <path d="M0 0h46.395v45.68H0V0z" data-name="Rectangle 4067" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Resources'
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45.088"
        height="43.235"
        viewBox="34.838 985.62 45.088 43.235"
      >
        <g data-name="Group 8656">
          <g data-name="Group 8655">
            <g data-name="Group 8648">
              <g
                data-name="Group 8647"
                transform="translate(61.248 1000.205)"
                clip-path='url("#a")'
              >
                <path
                  d="M18.678 10.104a8.828 8.828 0 0 1-.312 2.302 8.856 8.856 0 0 1-2.323 3.979 8.983 8.983 0 0 1-1.86 1.412 2.289 2.289 0 0 0-.864.833c-.214.354-.323.74-.328 1.151-.006.318-.068.63-.188.922a2.437 2.437 0 0 1-1.323 1.312c-.297.12-.604.183-.927.183H8.928c-.328 0-.635-.063-.932-.183a2.437 2.437 0 0 1-1.323-1.312 2.422 2.422 0 0 1-.183-.922 2.276 2.276 0 0 0-.328-1.146c-.213-.354-.5-.63-.859-.828a8.858 8.858 0 0 1-3.953-4.64 8.616 8.616 0 0 1-.547-3.032 8.668 8.668 0 0 1 .531-3.041c.354-.98.87-1.87 1.542-2.672a8.99 8.99 0 0 1 2.375-1.99 8.967 8.967 0 0 1 2.922-1.057 8.726 8.726 0 0 1 3.104-.005 8.851 8.851 0 0 1 2.922 1.047 8.802 8.802 0 0 1 2.38 1.984 8.734 8.734 0 0 1 1.557 2.667 8.86 8.86 0 0 1 .542 3.036"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Path 9127"
                />
              </g>
            </g>
            <g data-name="Group 8650">
              <g
                data-name="Group 8649"
                transform="translate(34.838 985.616)"
                clip-path='url("#b")'
              >
                <path
                  d="M38.761 39.715h-2.819a.69.69 0 0 1-.705-.697c0-.194.068-.356.203-.49a.678.678 0 0 1 .502-.208h2.82c.192 0 .355.068.495.207a.687.687 0 0 1 0 .986.688.688 0 0 1-.496.202"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Path 9128"
                />
                <path
                  d="M38.056 41.802h-1.41a.69.69 0 0 1-.705-.693.69.69 0 0 1 .705-.697h1.41c.194 0 .356.068.497.202a.679.679 0 0 1 .207.495c0 .19-.072.355-.207.491a.689.689 0 0 1-.497.202"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Path 9129"
                />
                <path
                  d="M9.866 20.209h2.82v3.482h-2.82V20.21z"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Rectangle 4060"
                />
              </g>
            </g>
            <g data-name="Group 8652">
              <g
                data-name="Group 8651"
                transform="translate(34.838 985.616)"
                clip-path='url("#c")'
              >
                <path
                  d="M41.397.004H2.104c-.283 0-.548.055-.804.159A2.134 2.134 0 0 0 .157 1.297 2.096 2.096 0 0 0 0 2.095V3.49c0 .274.054.545.157.797A2.134 2.134 0 0 0 1.3 5.423c.257.104.522.158.805.158H3.51v20.224c0 .463.084.91.265 1.337.18.423.431.802.76 1.13.328.325.71.577 1.138.753.432.18.876.266 1.344.266H21.05v8.462a2.86 2.86 0 0 0-1.183.626c-.167.154-.314.32-.44.51a2.88 2.88 0 0 0-.311.594c-.076.212-.13.428-.153.649-.027.225-.027.45 0 .67a2.862 2.862 0 0 0 .482 1.244 2.743 2.743 0 0 0 1.007.878c.197.104.409.185.63.24.22.053.44.076.67.076.225 0 .445-.023.665-.076.221-.055.432-.136.63-.24a2.808 2.808 0 0 0 1.008-.878 2.816 2.816 0 0 0 .481-1.244c.027-.22.027-.445 0-.67a2.705 2.705 0 0 0-.464-1.243 2.82 2.82 0 0 0-.44-.51 2.86 2.86 0 0 0-.554-.382 2.666 2.666 0 0 0-.625-.244v-8.462h5.141a9.796 9.796 0 0 1-.162-3.24c.04-.337.099-.67.171-.99a.623.623 0 0 1-.238.05h-4.21a.713.713 0 0 1-.5-.208.674.674 0 0 1-.202-.49V12.557c0-.194.068-.361.202-.496a.686.686 0 0 1 .5-.202h4.21a.696.696 0 0 1 .701.698v11.03a9.338 9.338 0 0 1 1.404-2.4V9.065c0-.188.067-.355.202-.49a.684.684 0 0 1 .5-.203h4.209a.68.68 0 0 1 .494.203.693.693 0 0 1 .208.49v8.595a9.823 9.823 0 0 1 4.912.19V5.58h1.403c.278 0 .544-.054.8-.158a2.134 2.134 0 0 0 1.143-1.135 2.2 2.2 0 0 0 .161-.797V2.095a2.204 2.204 0 0 0-.161-.798A2.11 2.11 0 0 0 41.397.004M14.033 24.412a.708.708 0 0 1-.701.699h-4.21a.713.713 0 0 1-.5-.208.674.674 0 0 1-.202-.49V19.53c0-.194.067-.356.202-.49a.672.672 0 0 1 .5-.208h4.21c.192 0 .354.067.493.207a.684.684 0 0 1 .208.49v4.883Zm6.314.699h-4.209a.713.713 0 0 1-.5-.208.674.674 0 0 1-.202-.49v-8.37a.687.687 0 0 1 .702-.698h4.209c.193 0 .356.068.495.203.135.14.203.302.207.496v8.368a.709.709 0 0 1-.702.699m2.806 15.34c0 .186-.035.361-.107.532a1.416 1.416 0 0 1-.76.757 1.37 1.37 0 0 1-.536.103 1.378 1.378 0 0 1-.994-.405 1.43 1.43 0 0 1-.305-.455 1.354 1.354 0 0 1-.104-.531c0-.185.032-.365.104-.537a1.42 1.42 0 0 1 .76-.751c.17-.073.35-.108.54-.108.184 0 .364.035.535.108a1.399 1.399 0 0 1 .867 1.288m18.945-36.96a.685.685 0 0 1-.207.49.687.687 0 0 1-.494.207H2.104a.691.691 0 0 1-.499-.207.667.667 0 0 1-.202-.49V2.094c0-.194.068-.357.202-.492a.69.69 0 0 1 .5-.206h39.292c.192 0 .355.071.494.206a.686.686 0 0 1 .207.492V3.49ZM30.872 19.736a9.812 9.812 0 0 1 2.806-1.658V9.765h-2.806v9.972Z"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Path 9130"
                />
              </g>
            </g>
            <g data-name="Group 8654">
              <g
                data-name="Group 8653"
                transform="translate(34.838 985.616)"
                clip-path='url("#d")'
              >
                <path
                  d="M16.914 16.725h2.819v6.966h-2.82v-6.966z"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Rectangle 4063"
                />
                <path
                  d="M23.961 13.238h2.82v10.453h-2.82V13.238z"
                  fill="#d8d8dd"
                  fill-rule="evenodd"
                  data-name="Rectangle 4064"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h18.678v22.667H0V0z" data-name="Rectangle 4059" />
          </clipPath>
          <clipPath id="b">
            <path d="M0 0h45.25v42.902H0V0z" data-name="Rectangle 4061" />
          </clipPath>
          <clipPath id="c">
            <path d="M0 0h43.744v43.24H0V0z" data-name="Rectangle 4062" />
          </clipPath>
          <clipPath id="d">
            <path d="M0 0h45.25v42.902H0V0z" data-name="Rectangle 4065" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Enhancements',
    target: 'enhancementsMenu'
  },
  {
    icon: <FaStar />,
    label: 'Updates & Events',
    target: 'updatesEventsMenu'
  }

];

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 576);
  const sideNavRef = useRef();
  const arrowsIconRef = useRef();

  const toggleNav = () => {
    const screenWidth = window.innerWidth;
    const leftValue = screenWidth > 576 ? '-65px' : '-60px';

    if (isNavOpen) {
      sideNavRef.current.style.left = leftValue;
      arrowsIconRef.current.style.transform = 'rotate(180deg)';
    } else {
      sideNavRef.current.style.left = '0';
      arrowsIconRef.current.style.transform = 'rotate(0deg)';
    }
    setIsNavOpen(!isNavOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 576) {
      sideNavRef.current.style.left = '-60px';
      arrowsIconRef.current.style.transform = 'rotate(180deg)';
      setIsNavOpen(false);
    } else {
      sideNavRef.current.style.left = '0';
      arrowsIconRef.current.style.transform = 'rotate(0deg)';
      setIsNavOpen(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* SIDENAV */}
      <div className="side-nav" ref={sideNavRef} style={{ transition: 'left 0.3s ease' }}>
        {menuStructure.map((item, index) => (
          <div
            key={index}
            className={`hub-item ${activeIndex === index ? 'active' : ''}`}
            data-bs-toggle={item.target ? 'offcanvas' : undefined}
            data-bs-target={item.target ? `#${item.target}` : undefined}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <div className="tooltipHub">{item.label}</div>
          </div>
        ))}

        <div className="arrows-btn" onClick={toggleNav}>
          <i ref={arrowsIconRef} className="ri-arrow-left-double-line"></i>
        </div>
      </div>

      {/* === OFFCANVAS MENUS === */}

      {/* My Business */}
      <div className="offcanvas offcanvas-start" id="mybusinessmenu">
        <div className="offcanvas-header">
          <i className="cross-modal ri-close-large-line" data-bs-dismiss="offcanvas"></i>
        </div>
        <div className="offcanvas-body">
          <div className="hub-submenu">
            <div className="heading-title">My Business</div>
            <div className="submenu-list-header mt-3">Performance Monitor</div>
            <div className="submenu-list-items">
              <li><a href="">My Performance</a></li>
            </div>
            <AccordionItem title="Team Manager">
              <li><a href="">Team Manager</a></li>
              <li><a href="">Enrollment Network Viewer</a></li>
              <li><a href="">Personally Enrolled Team</a></li>
              <li><a href="">Volume Report</a></li>
              <li><a href="">Monthly Report (4 Cycles)</a></li>
              <li><a href="">Personally Enrolled Report</a></li>
              <li><a href="">Order History Report</a></li>
              <li><a href="">PC Report</a></li>
              <li><a href="">Sponsorship</a></li>
            </AccordionItem>
            <div className="submenu-list-items">
              <li><a href="">Uplin Leader Placement</a></li>
              <li><a href="">Qualification & Extension</a></li>
            </div>
            <div className="submenu-list-header mt-2">Tools</div>
            <div className="submenu-list-items">
              <li><a href="">Share Link</a></li>
              <li><a href="">Personal Website</a></li>
              <AccordionItem title="Wallet">
                <li><a href="">E-Wallet</a></li>
                <li><a href="">Payment Method</a></li>
                <li><a href="">My Coupons</a></li>
              </AccordionItem>
              <li><a href="">Forms & Price Lists</a></li>
              <li><a href="">Mobile App</a></li>
            </div>
            <div className="submenu-list-header mt-2">Discover</div>
            <div className="submenu-list-items">
              <li><a href="">Let’s Go to Turkey</a></li>
              <li><a href="">Mongolia Market Expansion</a></li>
            </div>
          </div>
        </div>
      </div>

      {/* Shop & Orders */}
      <div className="offcanvas offcanvas-start" id="shopOrdersMenu">
        <div className="offcanvas-header">
          <i className="cross-modal ri-close-large-line" data-bs-dismiss="offcanvas"></i>
        </div>
        <div className="offcanvas-body">
          <div className="hub-submenu">
            <div className="heading-title">Shop & Orders</div>
            <div className="submenu-list-items">
              <li><a href="">Shop Products</a></li>
              <li><a href="">Special Offers</a></li>
              <li><a href="">Manage Subscriptions</a></li>
              <li><a href="">Order</a></li>
            </div>
          </div>
        </div>
      </div>


      {/* Enhancements */}
      <div className="offcanvas offcanvas-start" id="enhancementsMenu">
        <div className="offcanvas-header">
          <i className="cross-modal ri-close-large-line" data-bs-dismiss="offcanvas"></i>
        </div>
        <div className="offcanvas-body">
          <div className="hub-submenu">
            <div className="heading-title">Enhancements</div>
            <div className="submenu-list-header mt-3">Resources & Information</div>
            <div className="submenu-list-items">
              <li><a href="">Training</a></li>
              <li><a href="">Product & Wellness</a></li>
              <li><a href="">Business</a></li>
              <li><a href="">Ways to Earn</a></li>
              <li><a href="">Ethics</a></li>
              <li><a href="">Council</a></li>
            </div>
          </div>
        </div>
      </div>
      
      {/* Update & Events */}

      <div className="offcanvas offcanvas-start" id="updatesEventsMenu">
        <div className="offcanvas-header">
          <i data-bs-dismiss="offcanvas" className="cross-modal ri-close-large-line"></i>
        </div>
        <div className="offcanvas-body">
          <div className=" hub-submenu">
            <div className="heading-title">Updates & Events</div>
            <div className="mt-3">
              <div className="submenu-list-header">Recognition</div>
              <div className="submenu-list-items">
                <li><a href="">Ipar Elite Circle</a></li>
                <li><a href="">Super Sponsor </a></li>
                <li><a href="">Dr. A Platinum IBA Summit </a></li>
                <li><a href="">Olympic Leadership Award </a></li>
                <li><a href="">Rank Recognitions </a></li>
                <li><a href="">Beyond the Journey </a></li>
              </div>
            </div>

            <div className="mt-2">
              <div className="submenu-list-header">Rank Up Report</div>
              <div className="submenu-list-items">
                <li><a href="">Deca Report </a></li>
                <li><a href="">Monthly Report </a></li>
                <li><a href="">Monthly Report by Country</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;


