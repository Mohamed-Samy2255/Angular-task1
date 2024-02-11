import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  

  imgPath(myElement:HTMLDivElement):void{
    myElement.classList.add( "d-block" );
    myElement.classList.remove( "d-none" );
  }

  close( element:HTMLDivElement ){
    element.classList.add( "d-none" );
  }
  

}
