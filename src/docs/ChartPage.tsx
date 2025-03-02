import React from "react";
import { Card } from "../components";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
];

const pieData = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
  { name: "D", value: 200 },
];

const ChartPage: React.FC = () => {
  const pixelTheme = {
    stroke: "#2D2D2D",
    fill: "#2D2D2D",
    fontSize: 12,
    fontFamily: "retro",
  };

  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Charts</h1>
          <p className="font-retro text-pixel-gray">
            Pixel-styled chart components for data visualization using Recharts.
          </p>
        </div>

        {/* Line Chart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Line Chart</h2>
          <Card>
            <div className="p-6 space-y-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" />
                    <XAxis
                      dataKey="name"
                      {...pixelTheme}
                      tick={{ fill: "#4B5563" }}
                    />
                    <YAxis {...pixelTheme} tick={{ fill: "#4B5563" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #2D2D2D",
                        borderRadius: "0px",
                        fontFamily: "retro",
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        fontFamily: "retro",
                        fontSize: "12px",
                      }}
                    />
                    <Line
                      type="stepAfter"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{
                        fill: "#3B82F6",
                        stroke: "#2563EB",
                        strokeWidth: 2,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<LineChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="stepAfter" dataKey="value" stroke="#3B82F6" />
</LineChart>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Bar Chart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Bar Chart</h2>
          <Card>
            <div className="p-6 space-y-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" />
                    <XAxis
                      dataKey="name"
                      {...pixelTheme}
                      tick={{ fill: "#4B5563" }}
                    />
                    <YAxis {...pixelTheme} tick={{ fill: "#4B5563" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #2D2D2D",
                        borderRadius: "0px",
                        fontFamily: "retro",
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        fontFamily: "retro",
                        fontSize: "12px",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="#10B981"
                      stroke="#059669"
                      strokeWidth={2}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="value" fill="#10B981" />
</BarChart>`}</code>
              </pre>
            </div>
          </Card>
        </section>

        {/* Pie Chart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">Pie Chart</h2>
          <Card>
            <div className="p-6 space-y-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8B5CF6"
                      stroke="#6D28D9"
                      strokeWidth={2}
                    >
                      <Cell fill="#8B5CF6" stroke="#6D28D9" />
                      <Cell fill="#F59E0B" stroke="#D97706" />
                      <Cell fill="#10B981" stroke="#059669" />
                      <Cell fill="#3B82F6" stroke="#2563EB" />
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #2D2D2D",
                        borderRadius: "0px",
                        fontFamily: "retro",
                      }}
                    />
                    <Legend
                      wrapperStyle={{
                        fontFamily: "retro",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<PieChart>
  <Pie
    data={pieData}
    dataKey="value"
    nameKey="name"
    outerRadius={80}
    fill="#8B5CF6"
  />
  <Tooltip />
  <Legend />
</PieChart>`}</code>
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
                    <th className="text-left py-2">Component</th>
                    <th className="text-left py-2">Props</th>
                    <th className="text-left py-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pixel-darkGray/20">
                  <tr>
                    <td className="py-3 text-pixel-blue">LineChart</td>
                    <td>data, width, height</td>
                    <td>Container for line chart with pixel styling</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">BarChart</td>
                    <td>data, width, height</td>
                    <td>Container for bar chart with pixel styling</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">PieChart</td>
                    <td>width, height</td>
                    <td>Container for pie chart with pixel styling</td>
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

export default ChartPage;
