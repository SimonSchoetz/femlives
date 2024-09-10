import Link from 'next/link';
import { DetailedHTMLProps, LinkHTMLAttributes } from 'react';

export enum AppLinkLayout {
  BUTTON = 'button',
  LINK = 'link',
}

export enum AppLinkStyle {
  FULL = 'full',
  LIGHT = 'light',
}

type Props = DetailedHTMLProps<
  LinkHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  title: string;
  href: string;
  layout?: AppLinkLayout;
  style?: AppLinkStyle;
};

const AppLink = ({
  title,
  href,
  layout = AppLinkLayout.LINK,
  style = AppLinkStyle.LIGHT,
  ...props
}: Props) => {
  const linkLayout = getLayout(layout);
  const linkStyle = getStyle(style);

  return (
    <Link href={href} className={`${linkLayout} ${linkStyle}`} {...props}>
      {title}
    </Link>
  );
};

export default AppLink;

const getLayout = (layout: AppLinkLayout): string => {
  const layoutMap: Record<AppLinkLayout, string> = {
    [AppLinkLayout.LINK]: 'TODO',
    [AppLinkLayout.BUTTON]: 'TODO',
  };
  return layoutMap[layout];
};

const getStyle = (layout: AppLinkStyle): string => {
  const layoutMap: Record<AppLinkStyle, string> = {
    [AppLinkStyle.FULL]: 'TODO',
    [AppLinkStyle.LIGHT]: 'TODO',
  };
  return layoutMap[layout];
};
