import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  template: `
    <div class="div">
      <div class="div-2">
        <div class="column">
          <div class="div-3">
            <div class="div-4">TALK TO US</div>
            <div class="div-5">
              <img
                loading="lazy"
                srcset="
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=100   100w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=200   200w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=400   400w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=800   800w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1200 1200w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1600 1600w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=2000 2000w,
                  https://cdn.builder.io/api/v1/image/assets/TEMP/d9729962-d57d-4fb3-a11c-962ada29e997?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&
                "
                class="img"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c5355f8370fb382f9ed56ffa4e8caa43731eb53ab904df982cc11e4e69913ca?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
                class="img-2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6465f7eb7aade2cecf63aa5c706521cd7ad83c408fdaf89921302649e0ea0959?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
                class="img"
              />
            </div>
            <div class="div-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9db84d9ddcec225e93e501663067f5e7a2bff8485115eece486fcdb8afb59a?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
                class="img-3"
              />
              <div class="div-7" [textContent]="'npc@warlocks.tech'"></div>
            </div>
            <div class="div-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/764c90a56c7d93999d75a9378c6cf0450258f931f290ec34d28b35f44a323c9a?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
                class="img-4"
              />
              <div class="div-9">
                R. dos Pinheiros, 1040 - 8º Andar São Paulo - SP
              </div>
            </div>
          </div>
        </div>
        <div class="column-2">
          <img
            loading="lazy"
            srcset="
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=100   100w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=200   200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=400   400w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=800   800w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=2000 2000w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/a2fe3ebffdca32ab231f7193dfcf244ee104a10eb114e94474ecf36215ed9255?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&
            "
            class="img-5"
          />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .div {
        justify-content: center;
        width: 100%;
        padding: 50px 40px;
      }
      @media (max-width: 991px) {
        .div {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-2 {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .div-2 {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 73%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
      .div-3 {
        align-items: flex-start;
        align-self: stretch;
        display: flex;
        padding-bottom: 50px;
        flex-direction: column;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .div-4 {
        color: #000;
        justify-content: center;
        align-self: stretch;
        border-bottom: 1px solid #c4c4c4;
        padding: 12px 0;
        font: italic 400 24px Inter, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-4 {
          max-width: 100%;
        }
      }
      .div-5 {
        justify-content: center;
        align-self: start;
        display: flex;
        margin-top: 16px;
        width: 104px;
        max-width: 100%;
        gap: 10px;
        padding: 1px;
      }
      .img {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 100%;
        fill: #ccc;
        overflow: hidden;
        flex: 1;
      }
      .img-2 {
        aspect-ratio: 1.2;
        object-fit: contain;
        object-position: center;
        width: 100%;
        fill: #ccc;
        overflow: hidden;
        flex: 1;
      }
      .div-6 {
        align-self: start;
        display: flex;
        margin-top: 16px;
        padding-right: 80px;
        gap: 8px;
      }
      @media (max-width: 991px) {
        .div-6 {
          max-width: 100%;
          flex-wrap: wrap;
          padding-right: 20px;
        }
      }
      .img-3 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 29px;
        overflow: hidden;
        max-width: 100%;
      }
      .div-7 {
        color: #000;
        flex-grow: 1;
        white-space: nowrap;
        font: italic 400 24px Inter, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-7 {
          white-space: initial;
        }
      }
      .div-8 {
        align-self: start;
        display: flex;
        padding-right: 61px;
        gap: 8px;
        margin: 5px 0 70px;
      }
      @media (max-width: 991px) {
        .div-8 {
          max-width: 100%;
          flex-wrap: wrap;
          padding-right: 20px;
          margin-bottom: 40px;
        }
      }
      .img-4 {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 29px;
        overflow: hidden;
        max-width: 100%;
      }
      .div-9 {
        color: #000;
        flex-grow: 1;
        font: italic 400 24px Inter, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-9 {
          max-width: 100%;
        }
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 27%;
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        .column-2 {
          width: 100%;
        }
      }
      .img-5 {
        aspect-ratio: 1.11;
        object-fit: contain;
        object-position: center;
        width: 100%;
        overflow: hidden;
        margin: auto 0;
      }
      @media (max-width: 991px) {
        .img-5 {
          margin-top: 40px;
        }
      }
    `,
  ],
  // templateUrl: './contact.component.html',
  // styleUrl: './contact.component.css'
})
export class ContactComponent {}
