import dateManipulation from "./functions/DateManipulation";
import {useState} from 'react';

const NextTaskTimer = (props) => {

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  setTimeout(reset, (60000 - (new Date().getSeconds())*1000));

  const difference = dateManipulation.getDifference(props.closest.date);
  const stringDateDifference =
    dateManipulation.differenceToDateString(difference);

  return (
    <div className="timer_container">
      <p>{props.closest.name}</p>
      {difference <= 0 && <h1 style={{ color: "red" }}>Pending Task!</h1>}
      {difference > 0 && props.closest.date > 0 && (
        <h1 className="timer">{stringDateDifference}</h1>
      )}
    </div>
  );
};

export default NextTaskTimer;
