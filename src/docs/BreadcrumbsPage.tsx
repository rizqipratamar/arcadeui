import React from 'react';
import { Breadcrumbs, Card } from '../components';

const BreadcrumbsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Breadcrumbs</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled breadcrumb navigation component for showing the current page location.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Components', href: '/components' },
                { label: 'Breadcrumbs' },
              ]}
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
  ]}
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* Custom Separator */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Custom Separator</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Breadcrumbs
                  items={[
                    { label: 'Home', href: '/' },
                    { label: 'Components', href: '/components' },
                    { label: 'Breadcrumbs' },
                  ]}
                  separator=">"
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumbs' },
  ]}
  separator=">"
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
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">items</td>
                    <td>BreadcrumbItem[]</td>
                    <td>[]</td>
                    <td>Array of breadcrumb items</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">separator</td>
                    <td>React.ReactNode</td>
                    <td>'/'</td>
                    <td>Custom separator between items</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">className</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-6">
                <h3 className="text-xl font-pixel mb-4">BreadcrumbItem Type</h3>
                <table className="w-full font-retro text-sm">
                  <thead>
                    <tr className="border-b-2 border-pixel-darkGray">
                      <th className="text-left py-2">Property</th>
                      <th className="text-left py-2">Type</th>
                      <th className="text-left py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pixel-darkGray/20">
                    <tr>
                      <td className="py-3 text-pixel-blue">label</td>
                      <td>string</td>
                      <td>Text to display for the breadcrumb item</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-pixel-blue">href</td>
                      <td>string?</td>
                      <td>Optional URL for the breadcrumb item</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default BreadcrumbsPage;