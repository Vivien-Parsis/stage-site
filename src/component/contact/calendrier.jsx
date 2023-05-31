import Calendar from "react-calendar";
import moment from "moment";

const ListOfDay = [
    '05-06-2023',
    '06-06-2023',
    '07-06-2023'
]

const Calendrier = () => {
    const getMaxDay = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear()+1);
        return date;
    }
    return (
    <Calendar 
    minDate={new Date()} 
    tileClassName={({ date, view }) => {
        if(ListOfDay.find(x=>x===moment(date).format("DD-MM-YYYY"))){
         return  'highlight'
        }
      }}
    maxDate={getMaxDay()} 
    minDetail="year" 
    nextLabel="⮞" 
    prevLabel="⮜">

    </Calendar>)
};
export default Calendrier;