import React from "react";
import HeaderStyles from "./HeaderStyles";
import HomeLink from "./HomeLink";

const AppHeader: React.FC = () => {
  return (
    <HeaderStyles>
      <div>
        <HomeLink />
        {/* TODO: Obter nome da página através de prop ou pela rota */}
        <h1>Ferramentas</h1>
      </div>
    </HeaderStyles>
  );
};

export default AppHeader;
