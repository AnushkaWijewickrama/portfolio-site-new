import { Component } from '@angular/core';
import { ButtonComponent } from "../../common/button/button.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {

}
