import React from "react";
import { Card } from "../components";
import Layout from "../components/Layout/Layout";

const DocsPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        <Card className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-pixel text-pixel-black mb-4">
            Welcome to Arcade UI
          </h1>
          <p className="font-retro text-pixel-gray mb-6">
            A pixel-perfect React component library for building retro-styled user interfaces.
          </p>
          <div className="prose font-retro text-pixel-black">
            <h2 className="text-2xl font-pixel mb-4">Getting Started</h2>
            <p className="mb-4">
              Select a component from the sidebar to view its documentation, examples, and API reference.
            </p>
            <h3 className="text-xl font-pixel mb-3">Features</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Pixel-perfect design system</li>
              <li>Fully customizable components</li>
              <li>TypeScript support</li>
              <li>Modern React patterns</li>
            </ul>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default DocsPage;
