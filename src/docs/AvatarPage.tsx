import React from "react";
import { Avatar, Card } from "../components";

const AvatarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Avatar</h1>
          <p className="font-retro text-pixel-gray">
            A pixel-styled avatar component for displaying user images or initials
            with various sizes and shapes.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Avatar
              src="https://i.pravatar.cc/300"
              alt="Example Avatar"
              size="lg"
              fallback="John Doe"
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Avatar
  src="https://i.pravatar.cc/300"
  alt="Example Avatar"
  size="lg"
  fallback="John Doe"
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* Sizes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Sizes</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex items-center space-x-4">
                <Avatar size="sm" fallback="SM" />
                <Avatar size="md" fallback="MD" />
                <Avatar size="lg" fallback="LG" />
                <Avatar size="xl" fallback="XL" />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Shapes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Shapes</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex items-center space-x-4">
                <Avatar
                  shape="circle"
                  size="lg"
                  src="https://i.pravatar.cc/300"
                  alt="Circle Avatar"
                />
                <Avatar
                  shape="square"
                  size="lg"
                  src="https://i.pravatar.cc/300"
                  alt="Square Avatar"
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Avatar shape="circle" size="lg" src="https://i.pravatar.cc/300" />
<Avatar shape="square" size="lg" src="https://i.pravatar.cc/300" />`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Fallback */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Fallback</h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="flex items-center space-x-4">
                <Avatar size="lg" fallback="John Doe" />
                <Avatar size="lg" />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Avatar size="lg" fallback="John Doe" />
<Avatar size="lg" /> {/* Shows '?' as fallback */}`}</code>
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
                    <td className="py-3 text-pixel-blue">src</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Source URL for the avatar image</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">alt</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Alternative text for the avatar</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">fallback</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Text to display when image fails to load</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">size</td>
                    <td>'sm' | 'md' | 'lg' | 'xl'</td>
                    <td>'md'</td>
                    <td>Size of the avatar</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">shape</td>
                    <td>'circle' | 'square'</td>
                    <td>'circle'</td>
                    <td>Shape of the avatar</td>
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

export default AvatarPage;