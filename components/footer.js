class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
        .faixa-vermelha {
          font-family: "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, sans-serif;
          font-size: 12px;
          color: white;
          background-color: #961a1c;
          padding: 2rem 0;
        }
        .regua_logos {
          max-width: 100%;
          height: auto;
          background-color: white;
          padding-top: 10px;
          padding-bottom: 10px;
        }
       }

      </style>
      <footer>
       <div class="regua_logos">
          <img src="http://audioguia.com.br/images/regua_MCI_colorida.png" width="1100"
               height="50"
               alt="barra de logotipos">
        </div>
        <div class="faixa-vermelha direitos-reservados">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p class="my-0 text-center">Todos os direitos reservados - Museu das Culturas Indígenas 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);