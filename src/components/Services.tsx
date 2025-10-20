
export default function Services() {
  const services = [
    {
      title: 'Signature Head Spa',
      description: 'Our signature treatment includes a deep cleanse, scalp massage, and nourishing hair mask.',
      price: '$120',
    },
    {
      title: 'Aromatherapy Scalp Treatment',
      description: 'A calming treatment using essential oils to soothe the scalp and promote relaxation.',
      price: '$150',
    },
    {
      title: 'Hydrating Hair and Scalp Facial',
      description: 'A multi-step treatment to exfoliate, hydrate, and rejuvenate the scalp and hair.',
      price: '$180',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-xl font-bold text-gray-800">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
