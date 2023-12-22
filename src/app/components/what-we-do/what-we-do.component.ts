import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [],
  template: `
    <div class="div">
      <div class="div-2">WHAT WE DO?</div>
      <div class="div-3">
        <div class="div-4">
          <div class="column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/720e84c9be7286d6582fa6694a73fe5c56c369a8ff4c6850a9f46dd85bc49a09?apiKey=1e324e1e8f6a4c749ed77a52bf07ea06&"
              class="img"
            />
          </div>
          <div class="column-2">
            <div class="div-5">
              We are a company focused on innovation and technology for brands
              looking to enter the web3.0 communities.
              <br />
              <br />
              Our strength lies in strategies that aim for the maximum brand
              reach throughout the user's journey.
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
        white-space: nowrap;
        border-radius: 10px;
        background-color: #1f28f1;
        margin-top: 34px;
        padding: 6px 26px 0;
        font: 400 46px Balgin-BoldItalic, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-2 {
          font-size: 40px;
          white-space: initial;
          padding: 0 20px;
        }
      }
            .div-3 {
        justify-content: space-between;
        align-self: stretch;
        margin: 100px 0 67px;
      }
      @media (max-width: 991px) {
        .div-3 {
          max-width: 100%;
          padding-right: 20px;
          margin: 40px 0;
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
        width: 49%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .column {
          width: 100%;
        }
      }
            .img {
        aspect-ratio: 3.41;
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
        width: 51%;
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
    `
  ],
  // templateUrl: './what-we-do.component.html',
  // styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

}
