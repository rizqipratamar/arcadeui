import React from "react";
import { Input, Card, Badge } from "../components";

const InputPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Input</h1>
          <p className="font-retro text-pixel-gray">
            Customizable input component with pixel art styling and multiple variants.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Input
              placeholder="Type something..."
              variant="default"
              size="lg"
              label="Example Input"
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Input
  placeholder="Type something..."
  variant="default"
  size="lg"
  label="Example Input"
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-col gap-4 max-w-sm">
                <Input variant="default" placeholder="Default variant" />
                <Input variant="success" placeholder="Success variant" />
                <Input variant="error" placeholder="Error variant" />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Input variant="default" placeholder="Default variant" />
<Input variant="success" placeholder="Success variant" />
<Input variant="error" placeholder="Error variant" />`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Sizes</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-col gap-4 max-w-sm">
                <Input size="sm" placeholder="Small size" />
                <Input size="md" placeholder="Medium size" />
                <Input size="lg" placeholder="Large size" />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Input size="sm" placeholder="Small size" />
<Input size="md" placeholder="Medium size" />
<Input size="lg" placeholder="Large size" />`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* With Label and Error */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">With Label and Error</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-col gap-4 max-w-sm">
                <Input
                  label="Username"
                  placeholder="Enter username"
                />
                <Input
                  label="Email"
                  placeholder="Enter email"
                  error="Please enter a valid email address"
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Input
  label="Username"
  placeholder="Enter username"
/>
<Input
  label="Email"
  placeholder="Enter email"
  error="Please enter a valid email address"
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Full Width */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Full Width</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="w-full">
                <Input
                  fullWidth
                  placeholder="Full width input"
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Input
  fullWidth
  placeholder="Full width input"
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">API Reference</h2>
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
                <tbody>
                  <tr className="border-b border-pixel-darkGray">
                    <td className="py-2"><Badge variant="primary">label</Badge></td>
                    <td className="py-2">string</td>
                    <td className="py-2">undefined</td>
                    <td className="py-2">Label text above the input</td>
                  </tr>
                  <tr className="border-b border-pixel-darkGray">
                    <td className="py-2"><Badge variant="primary">error</Badge></td>
                    <td className="py-2">string</td>
                    <td className="py-2">undefined</td>
                    <td className="py-2">Error message below the input</td>
                  </tr>
                  <tr className="border-b border-pixel-darkGray">
                    <td className="py-2"><Badge variant="primary">variant</Badge></td>
                    <td className="py-2">'default' | 'success' | 'error'</td>
                    <td className="py-2">'default'</td>
                    <td className="py-2">Style variant of the input</td>
                  </tr>
                  <tr className="border-b border-pixel-darkGray">
                    <td className="py-2"><Badge variant="primary">size</Badge></td>
                    <td className="py-2">'sm' | 'md' | 'lg'</td>
                    <td className="py-2">'md'</td>
                    <td className="py-2">Size of the input</td>
                  </tr>
                  <tr className="border-b border-pixel-darkGray">
                    <td className="py-2"><Badge variant="primary">fullWidth</Badge></td>
                    <td className="py-2">boolean</td>
                    <td className="py-2">false</td>
                    <td className="py-2">Whether the input takes full width</td>
                  </tr>
                  <tr>
                    <td className="py-2"><Badge variant="primary">className</Badge></td>
                    <td className="py-2">string</td>
                    <td className="py-2">''</td>
                    <td className="py-2">Additional CSS classes</td>
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

export default InputPage;