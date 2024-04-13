import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Send the message using the MessageService
      this.messageService.sendMessage({
        id: '',
        senderId: '',
        receiverId: 'admin-id',
        content: this.contactForm.get('message')?.value || '', 
        sentAt: new Date()
      }).subscribe(() => {
        this.isSent = true;
        this.contactForm.reset();
      });
    }
  }
}