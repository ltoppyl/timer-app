import React, { useState } from "react";
import HomeCountdown from "../components/countdown/HomeCountdown";

const MainCountdown = () => {
  const time = new Date();
  const [settingTime, setSettingTime] = useState<number>(0);
  time.setSeconds(time.getSeconds() + settingTime);
  return (
    <HomeCountdown
      settingTime={settingTime}
      setSettingTime={setSettingTime}
      expiryTimestamp={time}
    />
  );
};

export default MainCountdown;
