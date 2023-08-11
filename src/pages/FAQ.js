const FAQ = () => {
  return (
    <div>
      <div className="WelcomeBlockBox">
        Korduvad Küsimused
        <br />
        <div class="accordion container" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Kas STOP nupu vajutamine on väljumissoovi korral kohustuslik?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body AboutContent">
                Ei, kui just ei taheta soovitud peatusest kogemata mõõda sõita.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Miks peab ühistranspordis sõites sõiduõiguse validaatoris registreerima?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body AboutContent">
              Sõiduõigusega reisijate sõiduinfo on vajalik ühistranspordiliinide ja -graafikute paremaks planeerimiseks. Samuti on siis reisjal võimalus kasutada tasuta WIFIt.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Millised piirangud kehtivad ühissõidukisse kaasa võetavate esemete kohta?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body AboutContent">
              Ühistranspordiseaduse  §72 lg 3 sätestab, et ühissõiduki salongis pole lubatud vedada käsipagasit, mis võib ohustada teiste ühissõidukis sõitvate isikute tervist või vara ning määrida või muul viisil kahjustada ühissõidukit. Keelatud pagas on eelkõige radioaktiivsed, lõhke-, mürk-, sööbivad, tuleohtlikud, lehkavad ja määrivad ained.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
