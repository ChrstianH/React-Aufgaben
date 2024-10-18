import { FormEventHandler } from "react";
import {
  sizeRef,
  ageRef,
  weightRef,
  activityRef,
  genderFRef,
  genderMRef,
} from "../refs/CalcRefs";

export default function KcalCalcForm(props: {
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
}) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="bodySize">Body size (in cm)</label>
      <input ref={sizeRef} type="number" name="bodySize" id="bodySize" />
      <label htmlFor="age">Age</label>
      <input ref={ageRef} type="number" name="age" id="age" />
      <label htmlFor="bodyWeight">Weight</label>
      <input ref={weightRef} type="number" name="bodyWeight" id="bodyWeight" />
      <label htmlFor="activity">Activity</label>
      <select ref={activityRef} name="activity" id="activity">
        <option value="0.95">Schlafen</option>
        <option value="1.2">Nur Sitzen und Liegen</option>
        <option value="2.2">Körperlich anstrengende berufliche Arbeit</option>
      </select>
      <label htmlFor="gender">Gender</label>
      <input ref={genderFRef} type="radio" name="gender" id="gender_f" />
      <label htmlFor="gender_f">Female</label>
      <input ref={genderMRef} type="radio" name="gender" id="gender_m" />
      <label htmlFor="gender_m">Male</label>
      <button type="submit">Calculate</button>
    </form>
  );
}
