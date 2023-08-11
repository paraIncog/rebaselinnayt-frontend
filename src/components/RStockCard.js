function RStockCard(props) {
  return (
    <div className="container RStockCard">
      <div className="row RStockCardImg">
        <img
          className="RStockCardImg"
          src={props.RStockCardImg}
          alt="rstock_carimg"
        />
      </div>
      <div className="row">
        <div className="col-2" />
        <div className="col">
          <div className="row">{props.carname}</div>
        </div>
      </div>
    </div>
  );
}

export default RStockCard;
