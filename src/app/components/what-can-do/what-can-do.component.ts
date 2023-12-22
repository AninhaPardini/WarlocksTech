import { Component } from '@angular/core';

@Component({
  selector: 'app-what-can-do',
  standalone: true,
  imports: [],
  template: `
    <div class="div">
      <div class="div-2">WHAT CAN DO WITH IT?</div>
      <div class="div-3">
        <div class="div-4">
          <div class="column">
            <img
              loading="lazy"
              srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/72e58b8e165d82c81577d47c49be4404c1464fff4b56c38bc8a84081f0780374?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
              class="img"
            />
          </div>
          <div class="column-2">
            <div class="div-5">
              We provide the complete experience of creation, branding, content
              strategy and campaign, development, and all factors involved in
              the birth and evolution of a successful community!
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .div {
        align-items: center;
        background-color: rgba(31, 40, 241, 0.09);
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 50px 40px;
      }
      @media (max-width: 991px) {
        .div {
          max-width: 100%;
          padding: 0 20px;
        }
      }
      .div-2 {
        color: var(--branco, #f0f0f0);
        border-radius: 10px;
        background-color: #1f28f1;
        margin-top: 24px;
        padding: 6px 27px 0;
        font: 400 46px Balgin-BoldItalic, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-2 {
          max-width: 100%;
          font-size: 40px;
          padding: 0 20px;
        }
      }
      .div-3 {
        justify-content: space-between;
        align-self: stretch;
        margin: 100px 0 50px;
        padding: 0 24px;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
          margin: 40px 0;
          padding: 0 20px;
        }
      }
      .div-4 {
        gap: 20px;
        display: flex;
      }
      @media (max-width: 991px) {
        .div-4 {
          flex-direction: column;
          align-items: stretch;
          gap: 0px;
        }
      }
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 45%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
      .img {
        aspect-ratio: 1.04;
        object-fit: contain;
        object-position: center;
        width: 100%;
        overflow: hidden;
        flex-grow: 1;
      }
      @media (max-width: 991px) {
        .img {
          max-width: 100%;
          margin-top: 40px;
        }
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 55%;
        margin-left: 20px;
      }
      @media (max-width: 991px) {
        .column-2 {
          width: 100%;
        }
      }
      .div-5 {
        color: #000;
        margin: auto 0;
        font: italic 400 24px Inter, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-5 {
          max-width: 100%;
          margin-top: 40px;
        }
      }
    `,
  ],
  // templateUrl: './what-can-do.component.html',
  // styleUrl: './what-can-do.component.css'
})
export class WhatCanDoComponent {

}
