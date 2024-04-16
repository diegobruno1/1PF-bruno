import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
  <div class="bg">
  <div>
  <h1 class="title">Welcome to AKATSUKI!</h1>
  <p class="sub-title">Congratulations! You are almost a member.</p>
  </div>
  </div>
  `,
  styles: `
  .bg {
    display: flex;
    justify-content: center;
    // background: linear-gradient(to right, #a52121, #fafafafa);
    background: #a52121
  };
  .title{
    font-family: 'NINJA';
    color: #fafafafa
  };
  .sub-title {
    font-family: 'NINJA';
    color: #000000
  }
  `
})
export class FirstComponentComponent {

}
