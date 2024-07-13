import { CrossIcon } from "./icons";
import NavLinks from "./navlinks";

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => (
  <aside className="sidebar-style" style={{left :isSidebarOpen ?"0%" :"-100%"}}>
    <button
      type="button"
      onClick={() => setSidebarOpen(false)}
      className="Cross-icon-sidebar"
    >
      <CrossIcon />
    </button>
    <ul >
      <NavLinks />
    </ul>
  </aside>
);

export default Sidebar;
