import Link from 'next/link';

type MenuProps =
{
  url: string,
  label: string
};

const Menu = ({url, label}: MenuProps): JSX.Element =>
(
  <Link href={url}>
    {label}
  </Link>
);

export type {MenuProps};
export default Menu;
