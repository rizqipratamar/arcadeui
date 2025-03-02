import React from "react";
import { Accordion, AccordionItem, Card } from "../components";

const AccordionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Accordion</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled accordion component for organizing content in
            collapsible sections.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <div className="w-full max-w-md">
              <Accordion>
                <AccordionItem title="Section 1">
                  <p>This is the content for section 1</p>
                </AccordionItem>
                <AccordionItem title="Section 2">
                  <p>This is the content for section 2</p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Accordion>
  <AccordionItem title="Section 1">
    <p>This is the content for section 1</p>
  </AccordionItem>
  <AccordionItem title="Section 2">
    <p>This is the content for section 2</p>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </div>
        </Card>

        {/* Multiple Open Sections */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            Multiple Open Sections
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Accordion allowMultiple defaultIndex={[0]}>
                  <AccordionItem title="Section 1">
                    <p>This section is open by default</p>
                  </AccordionItem>
                  <AccordionItem title="Section 2">
                    <p>
                      You can open this section without closing the first one
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Section 3">
                    <p>Multiple sections can be open simultaneously</p>
                  </AccordionItem>
                </Accordion>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Accordion allowMultiple defaultIndex={[0]}>
  <AccordionItem title="Section 1">
    <p>This section is open by default</p>
  </AccordionItem>
  <AccordionItem title="Section 2">
    <p>You can open this section without closing the first one</p>
  </AccordionItem>
  <AccordionItem title="Section 3">
    <p>Multiple sections can be open simultaneously</p>
  </AccordionItem>
</Accordion>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Default Open Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            Default Open Section
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Accordion defaultIndex={1}>
                  <AccordionItem title="Section 1">
                    <p>This section is closed by default</p>
                  </AccordionItem>
                  <AccordionItem title="Section 2">
                    <p>This section is open by default</p>
                  </AccordionItem>
                </Accordion>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Accordion defaultIndex={1}>
  <AccordionItem title="Section 1">
    <p>This section is closed by default</p>
  </AccordionItem>
  <AccordionItem title="Section 2">
    <p>This section is open by default</p>
  </AccordionItem>
</Accordion>`}</code>
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
              <h3 className="text-xl font-pixel mb-4">Accordion Props</h3>
              <table className="w-full font-retro text-sm mb-8">
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
                    <td className="py-3 text-pixel-blue">allowMultiple</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Allow multiple sections to be expanded at once</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">defaultIndex</td>
                    <td>number | number[]</td>
                    <td>undefined</td>
                    <td>
                      Index or array of indices of sections open by default
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">className</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-pixel mb-4">AccordionItem Props</h3>
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
                    <td className="py-3 text-pixel-blue">title</td>
                    <td>React.ReactNode</td>
                    <td>-</td>
                    <td>Content for the accordion header</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">isOpen</td>
                    <td>boolean</td>
                    <td>undefined</td>
                    <td>Controls the open state (controlled mode)</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onChange</td>
                    <td>{"(isOpen: boolean) => void"}</td>
                    <td>undefined</td>
                    <td>Callback when item is toggled</td>
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

export default AccordionPage;
