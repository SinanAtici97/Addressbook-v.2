import { Component} from '@angular/core';
import { ContactService } from '../services/contact.service'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage{
  searchTerm: any;
  contacts: any = []

  constructor(
    private contactService: ContactService, private alertController: AlertController
  ) { }

loadContacts(){
  this.contactService.getContacts().subscribe(res =>{
    console.log(res)
    this.contacts = res;
  }, error =>{
    console.log(error)
  })
}


  ionViewWillEnter() {
    this.loadContacts();
  }

  async deleteContact(id: any) {
    const alert = await this.alertController.create({
      header: 'Remove',
      subHeader: 'Remove this contact',
      message: 'Are you sure?',
      buttons: [{
        text: 'Okey',
        handler: () => {
          console.log(id)
    this.contactService.deleteContact(id).subscribe(res =>{
      console.log(res)
      this.contacts = res;
    }, error =>{
      console.log(error)
    })
        }
      }, 'Cancel']
    });

    await alert.present();

  }

  editContact(id:string) {
    console.log(id)
  }


}
