import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  time: any;
  radio: any;
  checkbox: any;

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
  } 

  /**
   * 
   * @param event 
   * This function will get triggered when datetime picker changes it's value.
   */
  dateChanged(event) { 
    console.log("The choosen date & time is:",this.time);
  }

  /**
   * 
   * @param event 
   * This function will get triggered when check box is checked
   */
  checkChanged(event) {
    console.log("Checkbox checked with value: ",JSON.stringify(event.checked));
  }

  /**
   * 
   * @param event 
   * This function will get triggered when radio button is clicked
   */
  radioChanged(event) {
    console.log("Checkbox checked with value: ",JSON.stringify(event));
  }

  /**
   * 
   */
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Do you like this artical',
      buttons: [
        {
          text: 'Yes',
          role: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        },{
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
