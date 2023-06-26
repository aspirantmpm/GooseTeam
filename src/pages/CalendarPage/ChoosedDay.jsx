import { DayCalendarHead } from 'components/Сalendar/DayCalendarHead';
import { TaskColumnsList } from 'components/Сalendar/TaskColumnsList';
import './calendar.css';

const ChoosedDay = () => {
  return (
    <div>
      <DayCalendarHead />
      <TaskColumnsList />
    </div>
  );
};

export default ChoosedDay;