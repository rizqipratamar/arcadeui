import React, { useState } from "react";
import { Calendar, Card } from "../components";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <div className="min-h-screen bg-pixel-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-pixel text-pixel-black">Calendar</h1>
          <p className="font-retro text-pixel-gray">
            A pixel-styled calendar component for date selection with
            customizable options.
          </p>
        </div>

        {/* Preview */}
        <Card className="mb-8">
          <div className="flex items-center justify-center p-8 bg-[url('/grid.png')] bg-center border-b border-pixel-darkGray">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </div>
          <div className="p-4 bg-pixel-black/5">
            <pre className="font-retro text-sm overflow-x-auto p-4">
              <code className="text-pixel-black">{`<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
/>`}</code>
            </pre>
          </div>
        </Card>

        {/* With Min/Max Dates */}
        <section className="space-y-4">
          <h2 className="text-2xl font-pixel text-pixel-black">
            With Min/Max Dates
          </h2>
          <Card>
            <div className="space-y-6 p-6">
              <div className="space-y-4">
                <Calendar
                  minDate={new Date(2024, 0, 1)}
                  maxDate={new Date(2024, 11, 31)}
                />
              </div>
              <pre className="font-retro text-sm bg-pixel-black/5 p-4 rounded">
                <code>{`<Calendar
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
/>`}</code>
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
                    <td className="py-3 text-pixel-blue">selectedDate</td>
                    <td>Date</td>
                    <td>undefined</td>
                    <td>Currently selected date</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">onDateSelect</td>
                    <td>{"(date: Date) => void"}</td>
                    <td>undefined</td>
                    <td>Callback when a date is selected</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">minDate</td>
                    <td>Date</td>
                    <td>undefined</td>
                    <td>Minimum selectable date</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-pixel-blue">maxDate</td>
                    <td>Date</td>
                    <td>undefined</td>
                    <td>Maximum selectable date</td>
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

export default CalendarPage;
