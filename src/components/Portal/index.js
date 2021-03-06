import React from "react";
import ReactDOM from "react-dom";

const Portal = ({
  children,
  className = "root-portal",
  element = "div"
}) => {
  const [container] = React.useState(() => {
    const el = document.createElement(element);
    el.classList.add(className);
    return el;
  });

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default Portal;