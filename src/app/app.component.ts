import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { DatePickerModule } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { Knob } from 'primeng/knob';
import { RatingModule } from 'primeng/rating';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    DatePickerModule,
    FormsModule,
    RatingModule,
    Knob,
    SplitButtonModule,
    ToastModule,
    DrawerModule,
    AvatarModule,
    Dialog,
    InputTextModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService],
})
export class AppComponent {
  #primeng = inject(PrimeNG);
  #messageService = inject(MessageService);
  date: Date | undefined;
  rangeDates: Date[] | undefined;
  value!: number;
  knobValue: number = 40;
  items: MenuItem[] = [];
  visible: boolean = false;
  isVisibleDialog: boolean = false;

  constructor() {
    this.#primeng.ripple.set(true);
    this.initItems();
  }

  initItems() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.#messageService.add({
            severity: 'success',
            summary: 'Updated',
            detail: 'Data Updated',
            life: 3000,
          });
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.#messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: 'Data Deleted',
            life: 3000,
          });
        },
      },
      {
        separator: true,
      },
      {
        label: 'Quit',
        icon: 'pi pi-power-off',
        command: () => {
          window.open('https://angular.io/', '_blank');
        },
      },
    ];
  }

  showDialog() {
    this.isVisibleDialog = true;
  }

  toggleDarkMode() {
    const element: any = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }
}
