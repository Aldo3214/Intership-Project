import usePetsContext from "../hooks/use-pets";

function Route({ path, children }) {
  const { currentPath } = usePetsContext();

  if (currentPath === path) {
    return children;
  }

  return null;
}

export default Route;
