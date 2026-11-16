import { useCallback, useState } from "react";
import NavbarHorizontal from "./horizontal";
import NavbarVertical from "./vertical";
import NavbarIsland from "./island";

export default function NavbarComponent() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = useCallback(() => {
    setIsOpenSidebar((e) => !e);
  }, []);

  return (
    <>
      <NavbarHorizontal toggle={toggleSidebar} />
      <NavbarIsland />
      <NavbarVertical isOpen={isOpenSidebar} toggle={toggleSidebar} />
    </>
  );
}
