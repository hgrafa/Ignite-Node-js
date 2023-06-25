export function buildRoutePath(path) {
  const routerParametersRegex = /(:[a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(
    routerParametersRegex,
    "([a-z0-9]-_]+)"
  );

  const pathRegex = new RegExp(`^${pathWithParams}`);

  return pathRegex;
}
