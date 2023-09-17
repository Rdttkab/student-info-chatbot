import { useState } from "react";

export default function DateOptions() {
    const [show, setShow] = useState(false)

    function getWeekDates() {
        const startDate = new Date(); // Get the current date
        const weekDates = [];

   
      
        for (let i = 0; i < 7; i++) {
          const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
          const date = currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', });
          const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
      
          weekDates.push({ date, dayName });
        }
      
        return weekDates;
      }
      
      // Usage:
      const dates = getWeekDates();
      console.log(dates);

    return(<>
    <div className="flex justify-between">{dates.slice(0, 3).map((date, index)=>(
<button key={index} className="shadow-md py-2 px-4 flex flex-col justify-center items-center rounded-sm " onClick={()=>setShow(true)}>
    <div>{date.date}</div>
    <div>{date.dayName}</div>
</button>
    ))}</div>
    {show && 
        <div>
            <div>
                <div>Morning</div>
                <div className="flex justify-between items-center">{[9,10,11,12].map((hr)=>(
                    <button key={hr} className="shadow-md py-1 px-2 text-xs">{hr}&nbsp;AM</button>))}
                </div>
                <div>Afternoon </div>
                <div className="flex justify-between items-center">{[2,3,4,5].map((hr)=>(
                    <button key={hr} className="shadow-md py-1 px-2 text-xs">{hr}&nbsp;PM</button>))}
                </div>
                <div>Evening</div>
                <div className="flex justify-between items-center">{[7,8,9,10].map((hr)=>(
                    <button key={hr} className="shadow-md py-1 px-2 text-xs">{hr}&nbsp;AM</button>))}
                </div>
            </div>
        </div>}
    </>

    
    )
}