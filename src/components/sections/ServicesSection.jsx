import Card from "../ui/Card";
import CardContent from "../ui/CardContent";

export default function ServicesSection() {
  return (
    <section id="services" className="p-8 bg-gray-50">
      <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-2">Book Lending</h4>
            <p>Borrow books easily with our smooth lending process.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-2">Reading Rooms</h4>
            <p>Peaceful spaces designed for undisturbed reading and studying.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-2">Events & Workshops</h4>
            <p>Join our community events to learn, share, and grow together.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
