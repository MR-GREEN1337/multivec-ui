import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Database, Cog, Zap } from 'lucide-react';
import Image from 'next/image';

const PackageStructure = () => (
  <Card>
    <CardHeader>
      <CardTitle>Package Structure</CardTitle>
    </CardHeader>
    <CardContent>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`
├── assets
│   └── ostrich.png
├── multivec
│   ├── data
│   │   ├── load
│   │   │   ├── csv.py
│   │   │   ├── docx.py
│   │   │   └── pdf.py
│   │   └── process
│   │       └── pdf.py
│   ├── generate
│   │   └── __init__.py
│   ├── providers
│   │   ├── anthropic.py
│   │   ├── auth.py
│   │   ├── base.py
│   │   ├── bedrock.py
│   │   ├── groq.py
│   │   ├── ollama.py
│   │   ├── openai.py
│   │   ├── pinecone.py
│   │   └── qdrant.py
│   └── utils
│       └── base_format.py
├── notebooks
│   └── exploring.ipynb
└── tests
    └── test_core.py
        `}
      </pre>
    </CardContent>
  </Card>
);

const InstallationGuide = () => (
  <Card>
    <CardHeader>
      <CardTitle>Installation</CardTitle>
    </CardHeader>
    <CardContent>
      <p>To install MultiVec, run the following command:</p>
      <pre className="bg-gray-100 p-4 rounded-md mt-2">
        pip install multivec
      </pre>
    </CardContent>
  </Card>
);

const UsageExample = () => (
  <Card>
    <CardHeader>
      <CardTitle>Basic Usage</CardTitle>
    </CardHeader>
    <CardContent>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`
import multivec

# Load data
data = multivec.data.load.pdf.load_pdf("example.pdf")

# Process data
processed_data = multivec.data.process.pdf.process_pdf(data)

# Generate using a provider
provider = multivec.providers.openai.OpenAIProvider(api_key="your-api-key")
result = provider.generate(processed_data)

print(result)
        `}
      </pre>
    </CardContent>
  </Card>
);

const ModuleDescriptions = () => (
  <Tabs defaultValue="data">
    <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger value="data">Data</TabsTrigger>
      <TabsTrigger value="generate">Generate</TabsTrigger>
      <TabsTrigger value="providers">Providers</TabsTrigger>
      <TabsTrigger value="utils">Utils</TabsTrigger>
    </TabsList>
    <TabsContent value="data">
      <Card>
        <CardHeader>
          <CardTitle><FileText className="inline mr-2" />Data Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The data module contains functions for loading and processing various file formats:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>CSV: Load and process CSV files</li>
            <li>DOCX: Load and process Word documents</li>
            <li>PDF: Load and process PDF files</li>
          </ul>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="generate">
      <Card>
        <CardHeader>
          <CardTitle><Zap className="inline mr-2" />Generate Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The generate module provides functionality for generating content based on processed data. It interfaces with various LLM providers to produce augmented multimodal content.</p>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="providers">
      <Card>
        <CardHeader>
          <CardTitle><Database className="inline mr-2" />Providers Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The providers module contains integrations with various LLM and vector database providers:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>OpenAI</li>
            <li>Anthropic</li>
            <li>Bedrock</li>
            <li>Groq</li>
            <li>Ollama</li>
            <li>Pinecone</li>
            <li>Qdrant</li>
          </ul>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="utils">
      <Card>
        <CardHeader>
          <CardTitle><Cog className="inline mr-2" />Utils Module</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The utils module provides utility functions and classes used across the package, including base formatting functions for standardizing data across different formats and providers.</p>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

const DocsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">MultiVec Documentation</h1>
        <div className="space-y-8">
          <PackageStructure />
          <InstallationGuide />
          <UsageExample />
          <ModuleDescriptions />
        </div>
      </main>
    </div>
  );
};

export default DocsPage;