import React from "react";
import { Card, Badge, Button } from "../components";

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <h1 className="text-6xl font-pixel text-pixel-black animate-bounce">
            Arcade UI
          </h1>
          <p className="font-retro text-2xl text-pixel-gray">
            A Pixel-Perfect React Component Library for Modern Web Applications
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Features */}
        <Card className="mb-8">
          <div className="p-8 space-y-6">
            <h2 className="text-3xl font-pixel text-pixel-black mb-6">
              Why Arcade UI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Badge variant="primary" size="lg">
                  Pixel Perfect Design
                </Badge>
                <p className="font-retro">
                  Unique pixel art styling that makes your app stand out
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="success" size="lg">
                  Modern React
                </Badge>
                <p className="font-retro">
                  Built with modern React and TypeScript
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="warning" size="lg">
                  Customizable
                </Badge>
                <p className="font-retro">
                  Easily customize components to match your brand
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="info" size="lg">
                  Responsive
                </Badge>
                <p className="font-retro">
                  Works seamlessly across all device sizes
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Package Versions */}
        <section className="space-y-4">
          <h2 className="text-3xl font-pixel text-pixel-black">
            Package Versions
          </h2>
          <Card>
            <div className="p-6">
              <table className="w-full font-retro text-sm">
                <thead>
                  <tr className="border-b-2 border-pixel-darkGray">
                    <th className="text-left py-2">Package</th>
                    <th className="text-left py-2">Version</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">react</td>
                    <td>^19.0.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">react-dom</td>
                    <td>^19.0.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">react-router-dom</td>
                    <td>^7.2.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">tailwindcss</td>
                    <td>^4.0.9</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">typescript</td>
                    <td>~5.7.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Installation */}
        <section className="space-y-4">
          <h2 className="text-3xl font-pixel text-pixel-black">Installation</h2>
          <Card>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-pixel">Using npm</h3>
                <pre className="bg-pixel-black/5 p-4 rounded font-retro">
                  <code>npm install arcadeui</code>
                </pre>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-pixel">Using yarn</h3>
                <pre className="bg-pixel-black/5 p-4 rounded font-retro">
                  <code>yarn add arcadeui</code>
                </pre>
              </div>
            </div>
          </Card>
        </section>

        {/* Framework Support */}
        <section className="space-y-4">
          <h2 className="text-3xl font-pixel text-pixel-black">
            Framework Support
          </h2>
          <Card>
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Badge variant="primary" size="lg">
                    React
                  </Badge>
                  <p className="font-retro">v16.8+ supported</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" size="lg">
                    Next.js
                  </Badge>
                  <p className="font-retro">v12+ supported</p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="success" size="lg">
                    Vite
                  </Badge>
                  <p className="font-retro">v2+ supported</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default WelcomePage;
