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
  const sharedStyles = 'text-xl transition';
  return (
    <Link
      href={href}
      className={`${
        props.className ?? ''
      } ${sharedStyles} ${linkLayout} ${linkStyle}`}
      {...props}
    >
      {title}
    </Link>
  );
};

export default AppLink;

const getLayout = (layout: AppLinkLayout): string => {
  const buttonBorderStyles = 'border-2 border-black rounded-lg p-4 font-medium';
  const buttonHoverStyles =
    'hover:shadow-lg hover:shadow-fl-primary hover:border-fl-primary';

  const layoutMap: Record<AppLinkLayout, string> = {
    [AppLinkLayout.LINK]:
      'hover:underline font-normal bg-transparent duration-0',
    [AppLinkLayout.BUTTON]: `${buttonBorderStyles} ${buttonHoverStyles} duration-150`,
  };

  return layoutMap[layout] || '';
};

const getStyle = (layout: AppLinkStyle): string => {
  const layoutMap: Record<AppLinkStyle, string> = {
    [AppLinkStyle.FULL]: 'bg-black text-white hover:bg-fl-primary',
    [AppLinkStyle.LIGHT]:
      'text-black bg-transparent text-white hover:text-fl-primary ',
  };
  return layoutMap[layout] || '';
};
