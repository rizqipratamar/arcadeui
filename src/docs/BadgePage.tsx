import React from 'react';
import { Badge, Card } from '../components';

const BadgePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Badge</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled badge component for displaying status, labels, and counts.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Badge variant="primary" size="lg">
              Badge
            </Badge>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Badge variant="primary" size="lg">
  Badge
</Badge>`}</code>
            </pre>
          </div>
        </Card>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex flex-wrap gap-4">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>`}</code>
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
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}</code>
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
                    <td>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'</td>
                    <td>'primary'</td>
                    <td>The visual style variant of the badge</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">size</td>
                    <td>'sm' | 'md' | 'lg'</td>
                    <td>'md'</td>
                    <td>The size of the badge</td>
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

export default BadgePage;