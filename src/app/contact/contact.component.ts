import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  id: string = '';
  onTypeMode1: boolean = false;
  onTypeMode2: boolean = false;
  onTypeMode3: boolean = false;
  onTypeMode4: boolean = false;
  label1() {
    this.onTypeMode1 = true;
  }
  label2() {
    this.onTypeMode2 = true;
  }
  label3() {
    this.onTypeMode3 = true;
  }
  label4() {
    this.onTypeMode4 = true;
  }
}
