import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isToday,
} from "date-fns";

interface CalendarProps {
  /** Selected date */
  selectedDate?: Date;
  /** Callback when date is selected */
  onDateSelect?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Additional CSS classes */
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  className = "",
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return;
    onDateSelect?.(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  return (
    <div
      className={`bg-pixel-white border-2 border-pixel-darkGray p-4 ${className}`}
    >
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="font-pixel text-pixel-black hover:text-pixel-blue px-2 py-1"
        >
          ◄
        </button>
        <h2 className="font-pixel text-xl text-pixel-black">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="font-pixel text-pixel-black hover:text-pixel-blue px-2 py-1"
        >
          ►
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="font-retro text-center text-sm text-pixel-gray py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((date) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const isDisabled = isDateDisabled(date);
          const isTodayDate = isToday(date);

          return (
            <button
              key={date.toString()}
              onClick={() => handleDateClick(date)}
              disabled={isDisabled}
              className={`
                font-retro text-center p-2 text-sm
                ${isSelected ? "bg-pixel-blue text-pixel-white" : ""}
                ${
                  isDisabled
                    ? "text-pixel-gray cursor-not-allowed"
                    : "hover:bg-pixel-blue/10"
                }
                ${isTodayDate ? "border-2 border-pixel-blue" : ""}
                ${!isSelected && !isDisabled ? "text-pixel-black" : ""}
              `}
            >
              {format(date, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
