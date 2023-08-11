function PartnerCard(props) {
  return (
    <div className="container PartnerCard">
      <a href={props.address} className="ButtonLinkText">
        <div className="row">
          <div className="col-1">
            <svg
              className="icon btn-block__icon-svg"
              fill="none"
              height="80"
              viewBox="0 0 80 80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2dba99">
                <path
                  clip-rule="evenodd"
                  d="M19.75 8h40.5C63.973 8 67 10.958 67 14.59v44.82c0 3.632-3.027 6.59-6.75 6.59h-40.5C16.027 66 13 63.042 13 59.41V14.59C13 10.959 16.027 8 19.75 8zM60 63c2.205 0 4-1.75 4-3.9V14.9c0-2.15-1.795-3.9-4-3.9H20c-2.205 0-4 1.75-4 3.9v44.2c0 2.15 1.795 3.9 4 3.9z"
                  fill-rule="evenodd"
                ></path>
                <path d="M14.667 38.2H12c-.733 0-1.333-.627-1.333-1.4V34c0-2.316 1.794-4.2 4-4.2.736 0 1.333-.627 1.333-1.4s-.597-1.4-1.333-1.4C10.989 27 8 30.142 8 34v2.8c0 2.316 1.795 4.2 4 4.2h2.667c.736 0 1.333-.627 1.333-1.4s-.597-1.4-1.333-1.4zm50.666 0H68c.733 0 1.333-.627 1.333-1.4V34c0-2.316-1.794-4.2-4-4.2-.736 0-1.333-.627-1.333-1.4s.597-1.4 1.333-1.4C69.011 27 72 30.142 72 34v2.8c0 2.316-1.795 4.2-4 4.2h-2.667C64.597 41 64 40.373 64 39.6s.597-1.4 1.333-1.4z"></path>
                <path
                  clip-rule="evenodd"
                  d="M21 54c0-2.205 1.795-4 4-4s4 1.795 4 4-1.795 4-4 4-4-1.795-4-4zm2.667 0c0 .736.6 1.333 1.333 1.333s1.333-.597 1.333-1.333-.6-1.333-1.333-1.333-1.333.597-1.333 1.333zM51 54c0-2.205 1.795-4 4-4s4 1.795 4 4-1.795 4-4 4-4-1.795-4-4zm2.667 0c0 .736.6 1.333 1.333 1.333s1.333-.597 1.333-1.333-.6-1.333-1.333-1.333-1.333.597-1.333 1.333z"
                  fill-rule="evenodd"
                ></path>
                <path d="M31.6 64c-.773 0-1.4.597-1.4 1.333V68c0 .736-.63 1.333-1.4 1.333h-5.6c-.77 0-1.4-.597-1.4-1.333v-2.667c0-.736-.627-1.333-1.4-1.333s-1.4.597-1.4 1.333V68c0 2.205 1.884 4 4.2 4h5.6c2.316 0 4.2-1.795 4.2-4v-2.667c0-.736-.627-1.333-1.4-1.333zm29 0c-.773 0-1.4.597-1.4 1.333V68c0 .736-.63 1.333-1.4 1.333h-5.6c-.77 0-1.4-.597-1.4-1.333v-2.667c0-.736-.627-1.333-1.4-1.333s-1.4.597-1.4 1.333V68c0 2.205 1.884 4 4.2 4h5.6c2.316 0 4.2-1.795 4.2-4v-2.667c0-.736-.627-1.333-1.4-1.333z"></path>
                <path
                  d="M25.071 13h29.857C57.173 13 59 14.795 59 17s-1.827 4-4.071 4H25.07C22.827 21 21 19.205 21 17s1.827-4 4.071-4zm.262 5h29.334C55.4 18 56 17.552 56 17s-.6-1-1.333-1H25.333C24.6 16 24 16.448 24 17s.6 1 1.333 1zm-3.208 6h35.75A4.13 4.13 0 0162 28.125v13.75A4.13 4.13 0 0157.875 46h-35.75A4.13 4.13 0 0118 41.875v-13.75A4.13 4.13 0 0122.125 24zm35.518 19c.746 0 1.357-.597 1.357-1.333V28.333c0-.736-.61-1.333-1.357-1.333H22.357c-.746 0-1.357.597-1.357 1.333v13.334c0 .736.61 1.333 1.357 1.333z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
          <div className="col-2" />
          <div className="col">
            <div className="row">{props.btn_title}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PartnerCard;
