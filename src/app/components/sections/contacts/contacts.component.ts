import { Component } from '@angular/core';
import { ButtonComponent } from "../../common/button/button.component";
import { HeaderComponent } from "../../common/header/header.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {

}
