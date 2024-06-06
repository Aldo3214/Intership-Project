import classNames from "classnames";
import usePetsContext from "../hooks/use-pets";

function Link({ to, children, className, activeClassName }) {
  const { navigation, currentPath } = usePetsContext();

  const classes = classNames(
    "text-gray-600 hover:text-gray-700 rounded-md px-3 py-2 text-base font-bold",
    className,
    to === currentPath && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    navigation(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
