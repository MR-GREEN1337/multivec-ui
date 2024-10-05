import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Database, Cog, Zap, BarChart, Lock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <Icon className="w-8 h-8 mb-2 text-purple-500" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const DataLoadingFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FeatureCard
      icon={FileText}
      title="Multi-format Data Loading"
      description="Efficiently load data from various file formats including CSV, DOCX, and PDF. Our robust parsers handle complex document structures with ease."
    />
    <FeatureCard
      icon={Database}
      title="Structured Data Extraction"
      description="Automatically extract and structure data from unstructured sources, making it ready for processing by large language models."
    />
  </div>
);

const DataProcessingFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FeatureCard
      icon={Cog}
      title="Advanced Preprocessing"
      description="Apply sophisticated preprocessing techniques to clean, normalize, and enhance your data, ensuring optimal input for LLMs."
    />
    <FeatureCard
      icon={BarChart}
      title="Data Augmentation"
      description="Leverage built-in augmentation techniques to expand your dataset, improving model robustness and performance."
    />
  </div>
);

const LLMIntegrationFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FeatureCard
      icon={Zap}
      title="Multi-provider Support"
      description="Seamlessly integrate with popular LLM providers including OpenAI, Anthropic, Bedrock, Groq, and Ollama. Switch between providers with minimal code changes."
    />
    <FeatureCard
      icon={Lock}
      title="Secure Authentication"
      description="Built-in secure authentication handling for various LLM providers, ensuring your API keys and sensitive data remain protected."
    />
  </div>
);

const UtilitiesFeatures = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FeatureCard
      icon={Cog}
      title="Data Standardization"
      description="Utilize our utility functions to standardize data formats across different platforms and providers, ensuring consistency in your workflows."
    />
    <FeatureCard
      icon={Database}
      title="Vector Database Integration"
      description="Built-in support for vector databases like Pinecone and Qdrant, enabling efficient storage and retrieval of high-dimensional data."
    />
  </div>
);

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">MultiVec Features</h1>
        
        <p className="text-lg text-center mb-12">
          Discover the powerful capabilities of MultiVec, designed to streamline your multimodal data workflows and enhance your LLM integrations.
        </p>
        
        <Tabs defaultValue="data-loading" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="data-loading">Data Loading</TabsTrigger>
            <TabsTrigger value="data-processing">Data Processing</TabsTrigger>
            <TabsTrigger value="llm-integration">LLM Integration</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
          </TabsList>
          <TabsContent value="data-loading">
            <DataLoadingFeatures />
          </TabsContent>
          <TabsContent value="data-processing">
            <DataProcessingFeatures />
          </TabsContent>
          <TabsContent value="llm-integration">
            <LLMIntegrationFeatures />
          </TabsContent>
          <TabsContent value="utilities">
            <UtilitiesFeatures />
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Why Choose MultiVec?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comprehensive solution for multimodal data handling</li>
              <li>Seamless integration with popular LLM providers</li>
              <li>Robust data processing and augmentation capabilities</li>
              <li>Flexible and extensible architecture</li>
              <li>Active development and community support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesPage;