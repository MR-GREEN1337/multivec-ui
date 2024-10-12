"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Database, Cog, Zap, BarChart3, PlusCircle } from 'lucide-react';

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
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        {`
import multivec

# Load and process PDF data
pdf_loader = multivec.data.load.PDFLoader("example.pdf")
text_docs, image_docs = pdf_loader.process()

# Process HTML data
html_loader = multivec.data.load.HTMLLoader("http://example.com")
html_docs = html_loader.process()

# Load and process CSV data
csv_loader = multivec.data.load.CSVLoader("data.csv")
text_docs, image_docs = csv_loader.process()

# Use a provider
provider = multivec.providers.llm.openai.ChatOpenAI(api_key="your-api-key")
result = provider.generate("Your prompt here")

# Augment data
augmented_docs = pdf_loader.process_with_augmentation(keywords=["important", "keywords"])

print(result)
print(augmented_docs)
        `}
      </pre>
    </CardContent>
  </Card>
);

const ModuleDescriptions = () => {
  const [activeTab, setActiveTab] = useState('data');
  
  interface ModuleInterface {
    [key: string]: {
      icon: React.ReactNode;
      title: string;
      content: string;
      items: string[];
    };
  }

  const modules: ModuleInterface = {
    data: {
      icon: <FileText className="inline mr-2" />,
      title: "Data Module",
      content: "The data module contains functions for loading, processing, and augmenting various file formats:",
      items: [
        "PDF: Load and process PDF files, extract text and images",
        "HTML: Load and process HTML files or web pages",
        "CSV: Load and process CSV or Excel files, create visualizations",
        "Data Augmentation: Enhance extracted data with additional information or highlighting"
      ]
    },
    providers: {
      icon: <Database className="inline mr-2" />,
      title: "Providers Module",
      content: "The providers module contains integrations with various services:",
      items: [
        "LLM: OpenAI, Anthropic, Bedrock, Groq, Ollama",
        "Vector DB: Pinecone, Qdrant",
        "Cloud: AWS, Azure",
        "Embedding: Various embedding providers"
      ]
    },
    tools: {
      icon: <Cog className="inline mr-2" />,
      title: "Tools Module",
      content: "The tools module provides additional functionality:",
      items: [
        "CrewAI integration",
        "LangChain integration",
        "Base formatting utilities"
      ]
    },
    utils: {
      icon: <Zap className="inline mr-2" />,
      title: "Utils Module",
      content: "The utils module provides utility functions and classes used across the package:",
      items: [
        "Base formatting functions",
        "Helper utilities for data processing and manipulation"
      ]
    },
    eval: {
      icon: <BarChart3 className="inline mr-2" />,
      title: "Eval Module",
      content: "The eval module provides tools for evaluating model performance:",
      items: [
        "Metrics calculation",
        "Performance analysis utilities"
      ]
    },
    augmentation: {
      icon: <PlusCircle className="inline mr-2" />,
      title: "Data Augmentation",
      content: "MultiVec provides powerful data augmentation capabilities:",
      items: [
        "Keyword highlighting in images and text",
        "Automatic keyword extraction using LLMs",
        "Enhanced visualization of data points",
        "Integration with LLMs for content enrichment"
      ]
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-6">
        {Object.keys(modules).map(key => (
          <TabsTrigger key={key} value={key}>{modules[key].title}</TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(modules).map(([key, module]) => (
        <TabsContent key={key} value={key}>
          <Card>
            <CardHeader>
              <CardTitle>{module.icon} {module.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{module.content}</p>
              <ul className="list-disc pl-5 mt-2">
                {module.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const AugmentationExample = () => (
  <Card>
    <CardHeader>
      <CardTitle>Data Augmentation Example</CardTitle>
    </CardHeader>
    <CardContent>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
        {`
import multivec
from multivec.providers.llm.openai import ChatOpenAI

# Initialize LLM provider for keyword extraction
llm = ChatOpenAI(api_key="your-openai-api-key")

# Load and process PDF with augmentation
pdf_loader = multivec.data.load.PDFLoader("example.pdf", llm=llm)
augmented_docs = pdf_loader.process_with_augmentation()

# The augmented_docs now contain:
# - Extracted text with highlighted keywords
# - Images with important information highlighted
# - Additional metadata and annotations

# Process HTML with augmentation
html_loader = multivec.data.load.HTMLLoader("http://example.com", llm=llm)
augmented_html_docs = html_loader.process()

# The augmented_html_docs include:
# - Extracted text with highlighted keywords
# - Screenshots with important elements highlighted
# - Enhanced metadata based on page content

# Load and process CSV with augmentation
csv_loader = multivec.data.load.CSVLoader("data.csv")
augmented_text_docs, augmented_image_docs = csv_loader.process()

# The augmented CSV data includes:
# - Visualization of data with important points highlighted
# - Enhanced metadata and statistical summaries
        `}
      </pre>
    </CardContent>
  </Card>
);

const MultiVecDocs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">MultiVec Documentation</h1>
        <div className="space-y-8">
          <PackageStructure />
          <InstallationGuide />
          <UsageExample />
          <ModuleDescriptions />
          <AugmentationExample />
        </div>
      </main>
    </div>
  );
};

export default MultiVecDocs;