type NavbarProps =
{
  logo: string,
  title: string
};

const Navbar = ({logo, title}: NavbarProps): JSX.Element =>
(
  <nav>
    <div>{logo}</div>
    <div>{title}</div>
  </nav>
);

export type {NavbarProps};
export default Navbar;
