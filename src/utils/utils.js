
/***************************************************
All utility functions
******************************************************/

const getTimeDiff = (start,end) =>{
  const startHours = Math.floor(start / 60);
  const startMinutes = start - startHours*60;
  const endHours = Math.floor(end / 60);
  const endMinutes = end - endHours*60;
  return ((endHours * 60 +endMinutes) - (startHours * 60 + startMinutes))/60;
}

export default getTimeDiff;