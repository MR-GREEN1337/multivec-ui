import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Github, FileText, Zap, Database, Layers } from "lucide-react";

const Hero = () => (
  <div className="text-center py-20 bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 ease-in-out">
    <h1 className="text-5xl font-bold text-white mb-4">
      Augment Your Multimodal Data
    </h1>
    <p className="text-xl text-white mb-8">
      Empower your LLMs with advanced multimodal capabilities
    </p>
    <a href="/docs">
    <Button
      size="lg"
      className="transition-transform duration-200 hover:scale-105"
    >
      Explore MultiVec
      <Zap className="ml-2" />
    </Button>
    </a>
  </div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105">
    <CardHeader>
      <Icon className="w-10 h-10 mb-2 text-purple-500" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Features = () => (
  <div className="py-20 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <FeatureCard
        title="Data Loading"
        description="Effortlessly load multimodal data from various sources including CSV, DOCX, and PDF."
        icon={FileText}
      />
      <FeatureCard
        title="Data Processing"
        description="Advanced algorithms to process and augment your multimodal datasets."
        icon={Layers}
      />
      <FeatureCard
        title="LLM Integration"
        description="Seamless integration with popular LLM providers like OpenAI, Anthropic, and more."
        icon={Database}
      />
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 MultiVec. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://github.com/multivec/multivec">
          <Button
            variant="ghost"
            size="sm"
            className="transition-colors duration-200 hover:bg-gray-800"
          >
            <Github className="mr-2" />
            GitHub
          </Button>
        </a>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
