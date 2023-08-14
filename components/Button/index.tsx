import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({
  block,
  color,
  outline,
  size,
  component,
  href,
  children,
  className,
  rounded,
  disableOverlay,
  ...rest
}) => {
  const Component = component || href !== undefined ? "a" : "button";
  const [buttonSize, setButtonSize] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonSize(buttonRef.current.offsetWidth);
      if (buttonRef.current.offsetHeight > buttonRef.current.offsetWidth) {
        setButtonSize(buttonRef.current.offsetHeight);
      }
    }
  }, [buttonRef]);

  return (
    <Component
      ref={buttonRef}
      href={href}
      className={clsx(
        "btn",
        {
          [`btn-${outline ? "outline-" : ""}${color}`]: color,
          [`btn-size-${size}`]: [1, 2, 3, 4].includes(size),
          "btn-block": block,
          "text-gray-900": outline && color === "light",
          "text-white": outline && color === "dark",
          "rounded-pill": rounded,
          "btn-has-overlay": !disableOverlay,
        },
        className
      )}
      {...rest}
    >
      {!disableOverlay && <span className="btn-overlay" style={{ width: buttonSize, height: buttonSize }} />}
      <span className="btn-label">{children}</span>
    </Component>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light",
    "white",
    "link",
  ]),
  component: PropTypes.elementType,
  disableOverlay: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3, 4]),
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  block: false,
  className: undefined,
  color: "primary",
  component: undefined,
  disableOverlay: false,
  href: undefined,
  size: 3,
  outline: false,
  rounded: true,
};

export default Button;
