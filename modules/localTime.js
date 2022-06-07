import { localTime } from './globalVariables.js';
import { DateTime } from './luxon.js';

const setLocalTime = () => {
  const time = DateTime.now();
  setInterval(() => {
    localTime.innerHTML = time.toLocaleString(DateTime.DATETIME_MED);
  }, 1000);
};

export default setLocalTime;