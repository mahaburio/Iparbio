import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "../../../styles/pages/signuppage.css";

const SectionWrapper = ({
  title,
  children,
  onEdit,
  active,
  completed,
  linkText = "Edit",
  linkHref = "",
  disableEditClick = false,
  onLinkClick, // ✅ New prop
}) => {
  return (
    <>
      <h3
        className={classNames(
          "ck-tt d-flex justify-content-between align-items-center",
          { active: active }
        )}
        onClick={disableEditClick ? undefined : onEdit}
      >
        <span>{title}</span>

        {completed ? (
          <Link
            to={linkHref}
            className={classNames("edit", { enabled: completed })}
            onClick={(e) => {
              if (onLinkClick) {
                e.preventDefault(); // 🛑 Stop real navigation
                onLinkClick(); // 👉 Trigger your custom action
              }
            }}
          >
            {linkText}
          </Link>
        ) : (
          <span className="edit disabled">{linkText}</span>
        )}
      </h3>

      <div className={classNames("ck-body", { "ck-bodyActive": active })}>
        {children}
      </div>
    </>
  );
};

export default SectionWrapper;
