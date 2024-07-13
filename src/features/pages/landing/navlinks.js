
import { navlinkslist } from "../../../config/helper";
import { Link } from "react-router-dom";

const NavLinks = () => (
  <>
    {navlinkslist &&
      navlinkslist.map((obj, index) => (
        <li className="custom-navitem-link" key={index}>
          <Link
            to={obj.url}
          >
            {obj.name}
          </Link>
        </li>
      ))}
  </>
);

export default NavLinks;
