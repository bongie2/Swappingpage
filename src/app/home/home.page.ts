import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  constructor()  {  

    
  }
swapper(){
  const signUpButton = document.getElementById('signUp')
  const signInButton = document.getElementById('signIn')
  const container = document.getElementById('container')
  signUpButton.addEventListener('click', () =>
  {
  container.classList.add('right-panel-active')
  })

  signInButton.addEventListener('click', () =>
  {
  container.classList.remove('right-panel-active')
  })
}

}
