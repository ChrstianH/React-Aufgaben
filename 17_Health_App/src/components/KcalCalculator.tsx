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
      setBmr(Math.round(basalMetabolicRate * 1000) / 1000);
      setTdee(Math.round(basalMetabolicRate * activity * 1000) / 1000);
    } else if (genderF) {
      const basalMetabolicRate = 655.1 + 9.6 * weight + 1.8 * size - 4.7 * age;
      setBmr(Math.round(basalMetabolicRate * 1000) / 1000);
      setTdee(Math.round(basalMetabolicRate * activity * 1000) / 1000);
    }
  };

  return (
    <div>
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

      <div>
        <div className="kcal">kcal</div>
        <div className="kJ">kJ</div>
      </div>
      <div>
        <div>Basal Metabolic Rate</div>
        <div className="kcal">{bmr}</div>
        <div className="kJ">{bmr / 0.24}</div>
      </div>
      <div>
        <div>Total Daily Energy Expenditure</div>
        <div className="kcal">{tdee}</div>
        <div className="kJ">{tdee / 0.24}</div>
      </div>
    </div>
  );
}
