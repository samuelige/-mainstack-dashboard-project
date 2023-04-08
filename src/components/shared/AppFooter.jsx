import React from "react";
import { CFooter } from "@coreui/react";
import { Link } from "react-router-dom";

const AppFooter = () => (
    <CFooter>
      <div>
        <span className="ms-1">&copy; {new Date().getFullYear()} </span>
        <Link to="/" className="footer-link fw-semibold text-decoration-none">
          Main Stack
        </Link>
      </div>
    </CFooter>
);

export default React.memo(AppFooter);
