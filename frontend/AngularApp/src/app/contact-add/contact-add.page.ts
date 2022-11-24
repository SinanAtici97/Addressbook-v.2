import { Component, OnInit } from '@angular/core';
import { ContactService, Contact } from '../services/contact.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {

  editing = false;
  contact: Contact = {
    firstname: '',
    lastname: '',
    address: '',
    number: '',
    email: ''
  }

  constructor(private contactService: ContactService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get('contactId')) {
        this.editing = true;
        this.contactService.getContactById(paramMap.get('contactId'))
        .subscribe((res=> {
          this.contact = res;
          console.log(this.contact)
        }))
      }
    })
  }

saveContact(){

  this.contactService.createContact(this.contact.firstname, this.contact.lastname, this.contact.address, this.contact.number, this.contact.email)
  .subscribe(res => {
    this.router.navigate(['/contacts']);
  }, err=> console.log(err))
}

updateContact() {
  this.contactService.updateContact(this.contact._id, {
    firstname: this.contact.firstname,
    lastname: this.contact.lastname,
    address: this.contact.address,
    number: this.contact.number,
    email: this.contact.email

  }).subscribe(res => console.log)
}


}
