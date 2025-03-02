import React, { useState } from "react";
import { Modal, Button, Card } from "../components";

const ModalPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Modal</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled modal component for displaying content in an overlay
            window.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Example Modal"
            >
              <p>This is a basic modal with a title and close button.</p>
            </Modal>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>
  Open Modal
</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
>
  <p>This is a basic modal with a title and close button.</p>
</Modal>`}</code>
            </pre>
          </div>
        </Card>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Sizes</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Button onClick={() => setIsLargeOpen(true)}>
                  Open Large Modal
                </Button>
                <Modal
                  isOpen={isLargeOpen}
                  onClose={() => setIsLargeOpen(false)}
                  title="Large Modal"
                  size="lg"
                >
                  <p>This is a large modal with more content space.</p>
                  <div className="mt-4 space-y-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </Modal>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Large Modal"
  size="lg"
>
  <p>Modal content here...</p>
</Modal>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Custom Styling */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            Custom Styling
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Button onClick={() => setIsCustomOpen(true)}>
                  Open Custom Modal
                </Button>
                <Modal
                  isOpen={isCustomOpen}
                  onClose={() => setIsCustomOpen(false)}
                  title="Custom Modal"
                  className="border-pixel-blue"
                >
                  <p>This modal has custom border styling.</p>
                </Modal>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Custom Modal"
  className="border-pixel-blue"
>
  <p>This modal has custom border styling.</p>
</Modal>`}</code>
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
                    <td className="py-3 text-pixel-blue">isOpen</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Controls the visibility of the modal</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onClose</td>
                    <td>{"() => void"}</td>
                    <td>required</td>
                    <td>Callback function when modal is closed</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">title</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Optional modal title</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">size</td>
                    <td>'sm' | 'md' | 'lg'</td>
                    <td>'md'</td>
                    <td>Controls the width of the modal</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">showCloseButton</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to show the close button</td>
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

export default ModalPage;
