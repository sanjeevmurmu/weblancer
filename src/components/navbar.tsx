import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  UserGroupIcon,
  WrenchScrewdriverIcon,
  TrophyIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "About",
    icon: UserCircleIcon,
    href: "#about",
  },
  {
    name: "Services",
    icon: WrenchScrewdriverIcon,
    href: "#services",
  },
  {
    name: "Achievements",
    icon: TrophyIcon,
    href: "#achievements",
  },
  {
    name: "Team",
    icon: UserGroupIcon,
    href: "#team",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-500 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography 
          color="blue-gray" 
          className="text-lg font-bold cursor-pointer" 
          onClick={() => window.location.reload()}
        >
          WEBLANCERS
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button 
            variant="text" 
            color="gray"
            className="hover:bg-gray-50"
            onClick={() => window.location.href = '#contact'}
          >
            Contact Us
          </Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button 
              variant="text" 
              color="gray"
              className="hover:bg-gray-50"
              onClick={() => window.location.href = '#contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
