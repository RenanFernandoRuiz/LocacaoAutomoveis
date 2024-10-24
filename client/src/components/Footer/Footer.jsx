import "./Footer.css";

const Footer = () => {
  return (
    <footer className="">
    <div className="row p-0 m-0 w-100 tudo d-flex justify-content-center align-items-center">
      <div className="ttest d-flex flex-column flex-md-row col-6 col-md-4 align-content-center fs-1">
        <div className="m-lg-3">
          <h3 className="telefone ">CONTATO: (14) 99999-9999 </h3>
        </div>
      </div>
      <div className="logo col-6 m-0 col-md-4 m-lg-3 d-flex fs-1 align-items-center ">
        <a href="" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer