import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h1>Get in touch.</h1>
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
