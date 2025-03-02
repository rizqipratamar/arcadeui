import React from "react";
import { Button, Card } from "../components";

const ButtonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Button</h1>
          <p className="font-retro text-pixel-gray">
            Interactive button component with pixel art styling and multiple
            variants.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Button variant="primary" size="lg">
              Button
            </Button>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Button variant="primary" size="lg">
  Button
</Button>`}</code>
            </pre>
          </div>
        </Card>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Sizes</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* States */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">States</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Button disabled>Disabled</Button>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            API Reference
          </h2>
          <Card>
            <div className="p-6">
              <table className="w-full font-retro text-sm">
                <thead>
                  <tr className="border-b-2 border-pixel-darkGray">
                    <th className="text-left py-2">Prop</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Default</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">variant</td>
                    <td>'primary' | 'secondary' | 'danger' | 'success'</td>
                    <td>'primary'</td>
                    <td>The visual style variant of the button</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">size</td>
                    <td>'sm' | 'md' | 'lg'</td>
                    <td>'md'</td>
                    <td>The size of the button</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">disabled</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Whether the button is disabled</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onClick</td>
                    <td>{"() => void"}</td>
                    <td>-</td>
                    <td>Function called when the button is clicked</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">className</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ButtonPage;
