import RStockCard from "../components/RStockCard";

import MAN_NG_EN92 from "../components/pictures/MAN_NG_EN92_front_far.png";

const RollingStock = () => {
  return (
    <div>
      <div className="ContentGradientTop" />
      <div className="ContentGradientBottom" />
      <div className="NonWelcomeBlockBox">
        Bussiveerem
        <br />
        <div className="container">
          <div className="row">
            <RStockCard
              RStockCardImg={MAN_NG_EN92}
              carname="MAN NL202 - EN92"
            />
            <RStockCard carname="Solaris Urbino 12 II 2-ukseline autobuss" />
            <RStockCard carname="Solaris Urbino 18 II 3-ukseline liigendbuss" />
          </div>
          <br />
          <div className="row">
            <RStockCard carname="Mercedes-Benz Citaro 2017" />
            <RStockCard carname="MAN New Lion's City 12C 3-ukseline autobuss" />
            <RStockCard carname="MAN New Lion's City 18C 4-ukseline liigendbuss" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RollingStock;
