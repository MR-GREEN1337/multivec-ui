import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';

const MissionStatement = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg">
        At MultiVec, we're on a mission to revolutionize multimodal data augmentation for large language models. We believe in empowering developers and researchers with tools that seamlessly integrate various data types, enhancing the capabilities of AI systems across diverse applications.
      </p>
    </CardContent>
  </Card>
);

const ProjectOverview = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">About MultiVec</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-4">
        MultiVec is an advanced Python package designed to streamline the process of working with multimodal data in the context of large language models. Our toolkit offers:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Efficient data loading from various sources (CSV, DOCX, PDF)</li>
        <li>Sophisticated data processing algorithms</li>
        <li>Seamless integration with popular LLM providers</li>
        <li>Utilities for standardizing data formats across different platforms</li>
      </ul>
      <p className="mt-4">
        Whether you're a researcher pushing the boundaries of AI or a developer building the next generation of intelligent applications, MultiVec provides the tools you need to harness the full potential of multimodal data.
      </p>
    </CardContent>
  </Card>
);

const TeamMember = ({ name, role, avatarSrc, linkedin }: { name: string; role: string; avatarSrc: string; linkedin: string }) => (
    <div className="flex items-center space-x-4 mb-4">
      <Avatar>
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      <a 
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Linkedin size={24} />
      </a>
      </div>
    </div>
  );

const TeamSection = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Meet the Team</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamMember name="Islam HACHIMI" role="Founder" avatarSrc="/team/islam.png" linkedin="https://www.linkedin.com/in/islam-hachimi/" />
      </div>
    </CardContent>
  </Card>
);

const TechnologyStack = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Our Technology Stack</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Python</Badge>
        <Badge variant="secondary">PyTorch</Badge>
        <Badge variant="secondary">OpenCV2</Badge>
        <Badge variant="secondary">Hugging Face Transformers</Badge>
        <Badge variant="secondary">AWS</Badge>
        <Badge variant="secondary">MongoDB</Badge>
        <Badge variant="secondary">Pinecone</Badge>
        <Badge variant="secondary">Qdrant</Badge>
        <Badge variant="secondary">SQLite</Badge>
      </div>
    </CardContent>
  </Card>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">About MultiVec</h1>
        <MissionStatement />
        <ProjectOverview />
        <TechnologyStack />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;