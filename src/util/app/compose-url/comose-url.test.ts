import { Route } from '@/enums';
import { composeUrl } from './compose-url';
import { parsedEnv } from '@/util/helper';

const baseRoute = parsedEnv.HOST;

describe('composeUrl', () => {
  it('should return a string', () => {
    expect(typeof composeUrl(Route.HOME)).toBe('string');
  });

  it('should return url including baseurl', () => {
    expect(composeUrl(Route.HOME).includes(baseRoute)).toBe(true);
  });

  it('should accept a sub route string and combine it with the base url', () => {
    expect(composeUrl(Route.IMPRINT)).toBe(baseRoute + Route.IMPRINT);
    expect(composeUrl('/some/sub/routes')).toBe(baseRoute + '/some/sub/routes');
  });

  it('should throw error on trailing slashes except home route', () => {
    expect(() => composeUrl(Route.HOME)).not.toThrow();
    expect(() => composeUrl('route/with/trailing/slash/')).toThrow();
  });

  it('should throw error on missing slash prefix', () => {
    expect(() => composeUrl(Route.HOME)).not.toThrow();
    expect(() => composeUrl('route/with/trailing/slash')).toThrow();
  });
});
