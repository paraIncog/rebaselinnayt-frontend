import ButtonLinkIcon from "../components/ButtonLinkIcon";

const About = () => {
  return (
    <div>
      <div className="NonWelcomeBlockBox">
        {/* About Rebaselinna Linnatransport */}
        Rebaselinna Linnatranspordist
        <br />
        <div className="container AboutContent">
          {/* Modern Rebaselinna omnibus traffic began in the late 90s. We have the greatest transport fleet among other cities in Europe with the best technical competence, the largest workshops. Rebaselinna Linnatransport has taken the direction of becoming a service company. You can always be sure about Rebaselinn's public transport and our people. Our wheels are rolling almost 24/7, and even when the world stops, we're still moving forward. */}
          Kaasaegse Rebaselinna Linnatransport asutati 90ndate lõpus. Meil on
          üks parimatest ühistranspordivõrgustik Euroopas koos tehnilise
          kompetentsiga ja suurimate tööpindadega. Rebaselinna Linnatransport on
          võtnud suuna muutuda teenindusettevõtteks. Rebaselinna
          Linnatranspordis ja meie inimestes võite alati kindel olla. Meie
          autobusside rattad veerevad 24/7 ja isegi kui maailm peatub, liigume
          ikka edasi.
        </div>
        <br />
        <div className="row">
          <ButtonLinkIcon btn_title="Bussiveerem" address="/rolling_stock" />
          <ButtonLinkIcon btn_title="Partnerid" address="/partners" />
          <ButtonLinkIcon btn_title="Kontakt" address="/contacts" />
        </div>
      </div>
    </div>
  );
};

export default About;
