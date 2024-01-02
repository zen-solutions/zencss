/*
 * zenCSS v2.0.2-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

//--------------------------------------------------------
// Modal
//--------------------------------------------------------

class ZModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector(".close")
            .addEventListener("click", () => {
                this.close();
            });
        this.shadowRoot
            .querySelector(".modal")
            .addEventListener("click", (event) => {
                if (event.target === event.currentTarget) {
                    this.close();
                }
            });
        document.addEventListener("click", (event) => {
            if (event.target.classList.contains("modal-close")) {
                this.close();
            }

            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    this.close();
                }
            });
        });

        const openModalButton = document.querySelector(".modal-open");
        if (openModalButton) {
            openModalButton.addEventListener("click", () => {
                this.open();
            });
        }
    }

    open() {
        this.shadowRoot.querySelector(".modal").style.display = "flex";
    }

    close() {
        this.shadowRoot.querySelector(".modal").style.display = "none";
    }

    render() {
        this.shadowRoot.innerHTML = `
          <style>
          .modal {
              position: fixed;
              z-index: 10000;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.8);
              display: none;
              align-items: center;
              justify-content: center;
          }
          .modal-wrapper {
              position: relative;
              width: 80%;
              border: 1px solid rgba(111,111,111,.35);
              border-radius: var(--border-radius, 4px);
              background-color: #f4f4f4;
              color: #424242;
              box-sizing: border-box;
              max-width:500px;
          }
          
          .modal-header {
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
              border-bottom: 1px solid rgba(111,111,111,.35);
          }
          .modal-title {
              margin: 0;
              font-size: 1.5em;
          }
          .close {
              color: var(--dark-color, #aaa);
              font-size: 28px;
              font-weight: bold;
              cursor: pointer;
              border: none;
              background-color: transparent;
              position:relative:

          }
          .close:hover,
          .close:focus {
              color: var(--cta-color, #f00);
          }
          .modal-body {
              padding: 20px;
              max-height: 300px;
              overflow-y: auto;
          }
          .modal-footer {
              display: flex;
              justify-content: flex-end;
              padding: 0 10px;
              border-top: 1px solid rgba(111,111,111,.35);
              margin-left: 10px;
              margin-right: 10px;
          }

          @media only screen and (max-width: 767px) {
              .modal-body {
                  padding: 10px;
                  max-height: 220px;

              }
              .modal-wrapper {
                  width: 99%;
                  max-width:100% !important;
              }

          }
      </style>
      <div class="modal">
          <div class="modal-wrapper">
              <div class="modal-header">
                  <slot name="title"></slot>
                  <div class="title-spacer"></div>
                  <button class="close">&times;</button>
              </div>
              <div class="modal-body">
                  <slot></slot>
              </div>
              <div class="modal-footer">
                  <slot name="footer">
                      <button class="modal-close">Close</button>
                      <button class="modal-save">Save</button>
                  </slot>
              </div>
          </div>
      </div>
      `;
    }
}

customElements.define("z-modal", ZModal);
