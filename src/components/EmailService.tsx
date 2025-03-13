import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const EmailService = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_ogfusvy',
        'template_uoq26em',
        form.current,
        'ljlCfMvfp-UGXC5g9'
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};