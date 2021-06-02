import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
    const router = useRouter();
    return <div onClick={() => router.push(href)}>{children}</div>;
};

export default NavLink;

NavLink.propTypes = {
    children: PropTypes.object,
    href: PropTypes.string
};
