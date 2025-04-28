import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="p-8 max-w-xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
      <form className="space-y-4">
        <Input placeholder="Your Name" required />
        <Input placeholder="Your Email" type="email" required />
        <Textarea placeholder="Your Message" rows={4} required />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
