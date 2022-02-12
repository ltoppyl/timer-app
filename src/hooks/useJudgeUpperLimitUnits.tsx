const useJudgeUpperLimitUnites = (day: number, hour: number, minute: number) => {
  let upperLimitUnits: string;

  if (day === 0 && hour === 0 && minute === 0) {
    upperLimitUnits = "second";
  } else if (day === 0 && hour === 0 && minute !== 0) {
    upperLimitUnits = "minute";
  } else if (day === 0 && hour !== 0) {
    upperLimitUnits = "hour";
  } else {
    upperLimitUnits = "day";
  }

  return { upperLimitUnits };
};

export default useJudgeUpperLimitUnites;
