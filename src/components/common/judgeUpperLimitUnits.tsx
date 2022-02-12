const JudgeUpperLimitUnits = (day: number, hour: number, minute: number) => {
  let upperLimitUnits = "";

  if (day === 0 && hour === 0 && minute === 0) {
    upperLimitUnits = "second";
  }

  if (day === 0 && hour === 0 && minute !== 0) {
    upperLimitUnits = "minute";
  }

  if (day === 0 && hour !== 0) {
    upperLimitUnits = "hour";
  }

  if (day !== 0) {
    upperLimitUnits = "day";
  }
  return upperLimitUnits;
};

export default JudgeUpperLimitUnits;
