
export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The best head spa experience I have ever had. My scalp feels so clean and refreshed.',
      author: '- Sarah L.',
    },
    {
      quote: 'A truly relaxing and rejuvenating experience. The staff is incredibly professional and friendly.',
      author: '- Michael B.',
    },
    {
      quote: 'I have been struggling with a dry scalp for years, and after just one treatment, I see a huge difference.',
      author: '- Jessica P.',
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="text-gray-800 font-bold text-right">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
