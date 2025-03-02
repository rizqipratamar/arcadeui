import React from "react";
import { Card, Carousel } from "../components";

const CarouselPage: React.FC = () => {
  const sampleItems = [
    <div key="1" className="h-48 bg-pixel-blue flex items-center justify-center">
      <span className="font-pixel text-pixel-white text-2xl">Slide 1</span>
    </div>,
    <div key="2" className="h-48 bg-pixel-green flex items-center justify-center">
      <span className="font-pixel text-pixel-white text-2xl">Slide 2</span>
    </div>,
    <div key="3" className="h-48 bg-pixel-yellow flex items-center justify-center">
      <span className="font-pixel text-pixel-white text-2xl">Slide 3</span>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Carousel</h1>
          <p className="font-retro text-pixel-gray">
            A pixel-styled carousel component for displaying slideshows with
            customizable navigation and autoplay options.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Carousel items={sampleItems} className="w-full max-w-lg" />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Carousel
  items={[
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>
  ]}
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* With Autoplay */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">With Autoplay</h2>
          <Card>
            <div className="space-y-6 p-6">
              <Carousel
                items={sampleItems}
                autoPlayInterval={3000}
                className="max-w-lg"
              />
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Carousel
  items={items}
  autoPlayInterval={3000}
/>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Without Navigation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            Without Navigation
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <Carousel
                items={sampleItems}
                showArrows={false}
                showDots={false}
                className="max-w-lg"
              />
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Carousel
  items={items}
  showArrows={false}
  showDots={false}
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
                    <td>React.ReactNode[]</td>
                    <td>required</td>
                    <td>Array of items to display in the carousel</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">autoPlayInterval</td>
                    <td>number</td>
                    <td>0</td>
                    <td>Duration in ms between slides. 0 to disable</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">showArrows</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to show navigation arrows</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">showDots</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to show pagination dots</td>
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

export default CarouselPage;