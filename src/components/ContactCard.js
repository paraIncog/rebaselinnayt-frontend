const ASelge_ProfPic =
  "https://aselge.weebly.com/uploads/1/2/7/4/127417251/edited/1687849831157.jpg";

function ContactCard(props) {
  return (
    <div className="container ContactCard">
      <a href={props.address} className="ButtonLinkText">
        <div className="row">
          <div className="col-1">
            <img
              className="ContactCardImg"
              src={ASelge_ProfPic}
              alt="Andreas Selge"
            />
          </div>
          <div className="col-3" />
          <div className="col">
            <div className="row">{props.btn_title}</div>
            <div className="row ButtonLinkDesc">{props.email}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ContactCard;
