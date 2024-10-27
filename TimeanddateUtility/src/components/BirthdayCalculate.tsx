import React, { useState } from 'react'
import { TimeUtility } from '../Utils/TimeUtility';

const BirthdayCalculate: React.FC = () => {
    const [inputDate, setInputDate] = useState<string>('');
    const [results, setResults] = useState<{
        months: number | null;
        weeks: number | null;
        days: number | null;
        hours: number | null;
        minutes: number | null;
        seconds: number | null;
      }>({
        months: null,
        weeks: null,
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
      });

    const findMyBirthday = () => {
        const months = TimeUtility.getMonthsfromCurrentDate(inputDate);
        console.log(months);
        const weeks = TimeUtility.getWeeksfromCurrentDate(inputDate);
        const days = TimeUtility.getDaysfromCurrentDate(inputDate);
        const hours = TimeUtility.getHoursfromCurrentDate(inputDate);
        const minutes = TimeUtility.getMinutesfromCurrentDate(inputDate);
        const seconds = TimeUtility.getSecondsfromCurrentDate(inputDate);
    
        setResults({ months, weeks, days, hours, minutes,seconds });
    }

    return (
        <div>
            <h1>Birthday Calculate</h1>
            <form>
                <label>
                    Input your birthday:
                    <input
                        type="date"
                        value={inputDate}
                        onChange={(e) => setInputDate(e.target.value)}
                    />
                </label>
                <button onClick={findMyBirthday} type='button'>Calculate</button>
                <div>
                {results.months !== null && (
        <div>
          <p>Months from the given date to now: {results.months}</p>
          <p>Weeks from the given date to now: {results.weeks}</p>
          <p>Days from the given date to now: {results.days}</p>
          <p>Hours from the given date to now: {results.hours}</p>
          <p>Minutes from the given date to now: {results.minutes}</p>
          <p>Seconds from the given date to now: {results.seconds}</p>
        </div>
      )}
                </div>
            </form>
        </div>
    )
}

export default BirthdayCalculate
