import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";

export default function EnquiryPage() {
  return (
    <>
      <Navbar />

      <div className=" min-h-[80vh] justify-center p-8 ">
        <h3 className="text-4xl font-bold text-center mb-8">Enquiry Form</h3>
        <form className="space-y-4 max-w-xl mx-auto">
          <Input placeholder="Full Name" required />
          <Input placeholder="Phone Number" required />
          <Input placeholder="Email Address" type="email" required />
          <Textarea placeholder="Type your enquiry here..." rows={4} required />
          <Button type="submit">Submit Enquiry</Button>
        </form>
      </div>

      <Footer />
    </>
  );
}
