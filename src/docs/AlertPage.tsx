import React from "react";
import { Alert, Card } from "../components";

const AlertPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Alert</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled alert component for displaying important messages and
            notifications.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Alert title="Example Alert">This is a default alert message</Alert>
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Alert title="Example Alert">
  This is a default alert message
</Alert>`}</code>
            </pre>
          </div>
        </Card>

        {/* Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Variants</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Alert variant="info" title="Info Alert">
                  This is an informational alert
                </Alert>
                <Alert variant="success" title="Success Alert">
                  This is a success alert
                </Alert>
                <Alert variant="warning" title="Warning Alert">
                  This is a warning alert
                </Alert>
                <Alert variant="error" title="Error Alert">
                  This is an error alert
                </Alert>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Alert variant="info" title="Info Alert">
  This is an informational alert
</Alert>

<Alert variant="success" title="Success Alert">
  This is a success alert
</Alert>

<Alert variant="warning" title="Warning Alert">
  This is a warning alert
</Alert>

<Alert variant="error" title="Error Alert">
  This is an error alert
</Alert>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* With Close Button */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            With Close Button
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Alert
                  title="Dismissible Alert"
                  onClose={() => console.log("Alert closed")}
                >
                  Click the X button to dismiss this alert
                </Alert>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Alert
  title="Dismissible Alert"
  onClose={() => console.log('Alert closed')}
>
  Click the X button to dismiss this alert
</Alert>`}</code>
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
                    <td>'info' | 'success' | 'warning' | 'error'</td>
                    <td>'info'</td>
                    <td>The style variant of the alert</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">title</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Optional alert title</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">size</td>
                    <td>'sm' | 'md' | 'lg'</td>
                    <td>'md'</td>
                    <td>Controls the size of the alert</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">showIcon</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to show the variant icon</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onClose</td>
                    <td>{"() => void"}</td>
                    <td>undefined</td>
                    <td>Optional callback when close button is clicked</td>
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

export default AlertPage;
