import React from "react";
import { Link } from "react-router-dom";

export const HomeLink: React.FC = () => {
  return (
    <Link to="/">
      <img src="/assets/img/logo_dev.png" alt="Logotipo" />
    </Link>
  );
};

export default HomeLink;
