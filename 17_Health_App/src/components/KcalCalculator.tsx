import { useRef, useState } from "react";

export default function KcalCalculator() {
  const [bmr, setBmr] = useState(0); // Basal Metabolic Rate
  const [tdee, setTdee] = useState(0); //Total Daily Energy Expenditure

  const sizeRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const activityRef = useRef<HTMLSelectElement>(null);
  const genderFRef = useRef<HTMLInputElement>(null);
  const genderMRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseInt(sizeRef.current?.value || "0");
    const age = parseInt(ageRef.current?.value || "0");
    const weight = parseInt(weightRef.current?.value || "0");
    const activity = parseFloat(activityRef.current?.value || "0");
    const genderF = genderFRef.current?.checked;
    const genderM = genderMRef.current?.checked;

    if (genderM) {
      const basalMetabolicRate = 66.47 + 13.7 * weight + 5 * size - 6.8 * age;
      setBmr(basalMetabolicRate);
      setTdee(basalMetabolicRate * activity);
    } else if (genderF) {
      const basalMetabolicRate = 655.1 + 9.6 * weight + 1.8 * size - 4.7 * age;
      setBmr(basalMetabolicRate);
      setTdee(basalMetabolicRate * activity);
    }
  };

  return (
    <section className="calories">
      <h1>Test your daily Calorie Requirement</h1>
      <p>
        To determine your daily calorie requirement, we need some information
        about your age, gender, weight, height and activity level. Enter this
        information to calculate your individual requirements.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="bodySize">Body size (in cm)</label>
        <input ref={sizeRef} type="number" name="bodySize" id="bodySize" />
        <label htmlFor="age">Age</label>
        <input ref={ageRef} type="number" name="age" id="age" />
        <label htmlFor="bodyWeight">Weight</label>
        <input
          ref={weightRef}
          type="number"
          name="bodyWeight"
          id="bodyWeight"
        />
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

      <div className="result-table">
        <div></div>
        <div className="kcal">kcal</div>
        <div className="kJ">kJ</div>
      </div>
      <div className="result-table">
        <div>Basal Metabolic Rate</div>
        <div className="kcal">{Math.round(bmr * 1000) / 1000}</div>
        <div className="kJ">{Math.round(bmr * 4186.84) / 1000}</div>
      </div>
      <div className="result-table">
        <div>Total Daily Energy Expenditure</div>
        <div className="kcal">{Math.round(tdee * 1000) / 1000}</div>
        <div className="kJ">{Math.round(tdee * 4186.84) / 1000}</div>
      </div>
    </section>
  );
}
