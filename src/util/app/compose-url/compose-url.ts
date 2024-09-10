import { Route } from '@/enums';

export const composeUrl = (subRoute: Route | string): string => {
  assertIsValidSubRoute(subRoute);
  //todo: https://femlives.atlassian.net/jira/software/projects/FL/boards/1/backlog?epics=visible&selectedIssue=FL-17
  return process.env.HOST + subRoute;
};

const assertIsValidSubRoute = (subRoute: Route | string): void => {
  checkForTrailingSlash(subRoute);
  checkForMissingPrefix(subRoute);
};

const checkForTrailingSlash = (subRoute: Route | string): void => {
  const isHomeRoute = subRoute === Route.HOME;
  const hasTrailingSlash = subRoute.at(-1) === '/';

  if (!isHomeRoute && hasTrailingSlash) {
    throw new Error('Do not use routes with trailing slash!');
  }
};

const checkForMissingPrefix = (subRoute: Route | string): void => {
  const hasExpectedPrefix = subRoute.at(0) === '/';

  if (!hasExpectedPrefix) {
    throw new Error('Sub route is missing a prefixed slash!');
  }
};
