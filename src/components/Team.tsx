
import Image from 'next/image';

export default function Team() {
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Lead Therapist',
      image: '/team-1.jpg',
    },
    {
      name: 'John Smith',
      role: 'Scalp Specialist',
      image: '/team-2.jpg',
    },
    {
      name: 'Emily White',
      role: 'Aromatherapist',
      image: '/team-3.jpg',
    },
  ];

  return (
    <section id="team" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="mb-4">
                <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
