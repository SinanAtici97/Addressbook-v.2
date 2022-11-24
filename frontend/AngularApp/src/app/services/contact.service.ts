import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Contact {

  _id?: any;
  firstname: string;
  lastname: string;
  address: string;
  number: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  find(arg0: { firstname: string; }, arg1: (err: any, result: any) => void) {
    throw new Error('Method not implemented.');
  }

API = "http://localhost:3000/contacts"

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return this.http.get(this.API)
  }

  getContactById(id: any) {
    return this.http.get<Contact>(`${this.API}/${id}`);
  }

  createContact(firstname: string, lastname: string, address: string, number: string, email: string) {
    return this.http.post(this.API, {
      firstname, lastname, address, number, email
    })
  }


  updateContact(id: string, contact: Contact) {
    return this.http.put(`${this.API}/${id}`, contact);
  }

  deleteContact(id: string) {
    return this.http.delete(`${this.API}/${id}`)
  }

  detailContact(id: any){
    return this.http.get<Contact>(`${this.API}/${id}`);
  }



}
