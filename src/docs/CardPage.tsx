import React from "react";
import { Card } from "../components";

const CardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Card</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled card component for containing and organizing content
            with various styles.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Card title="Example Card" className="w-64">
              <p className="text-center">Card Content</p>
            </Card>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Card title="Example Card">
  <p>Card Content</p>
</Card>`}</code>
            </pre>
          </div>
        </Card>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-3 gap-4">
                <Card variant="default" title="Default">
                  Default variant
                </Card>
                <Card variant="outlined" title="Outlined">
                  Outlined variant
                </Card>
                <Card variant="elevated" title="Elevated">
                  Elevated variant
                </Card>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Card variant="default" title="Default">
  Default variant
</Card>

<Card variant="outlined" title="Outlined">
  Outlined variant
</Card>

<Card variant="elevated" title="Elevated">
  Elevated variant
</Card>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* With Footer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">With Footer</h2>
          <Card>
            <div className="space-y-6 p-6">
              <Card
                title="Card with Footer"
                footer={<div className="text-center">Footer Content</div>}
              >
                <p className="text-center py-4">Main Content</p>
              </Card>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Card 
  title="Card with Footer"
  footer={<div>Footer Content</div>}
>
  <p>Main Content</p>
</Card>`}</code>
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
                    <td>'default' | 'outlined' | 'elevated'</td>
                    <td>'default'</td>
                    <td>The visual style variant of the card</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">title</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Optional card title</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">footer</td>
                    <td>React.ReactNode</td>
                    <td>undefined</td>
                    <td>Optional footer content</td>
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

export default CardPage;
