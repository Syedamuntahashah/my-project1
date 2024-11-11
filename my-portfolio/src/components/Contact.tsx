import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Syeda Muntaha Shah" required />
        <input type="email" placeholder="syedashah32399@gmail.com" required />
        <textarea placeholder="feel free to contact me" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;