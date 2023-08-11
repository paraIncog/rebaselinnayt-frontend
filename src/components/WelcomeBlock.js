import { Link } from "react-router-dom";
import bus_front from "./pictures/MAN_NG_EN92_front_far.png";

const RebaselinnaLt_Name = "Rebaselinna Linnatransport";
const CatchPhrase = "Kiirem ja targem sihtkohta jõudmiseks Rebaselinnas.";
const ReadMore = "Loe lähemalt";

function WelcomeBlock() {
  return (
    <div>
      {/* Background */}
      <div className="WelcomeBlock">
        <img className="WelcomeBlockImg" src={bus_front} alt="WBlock_URL" />
      </div>
      {/* Content */}
      <div className="WelcomeBlockBox">
        <div className="WelcomeBlockContent">{RebaselinnaLt_Name}</div>
        <div className="WelcomeBlockContent">{CatchPhrase}</div>
        <button className="btn btn-primary" type="button">
          <Link className="ButtonLink" to="/about">
            {ReadMore}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default WelcomeBlock;
