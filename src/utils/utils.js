
/***************************************************
All utility functions
******************************************************/

const getTimeDiff = (start,end) =>{
    end = end.split(":");
    start = start.split(":");
  return ((end[0] * 60 + 1*end[1]) - (start[0] * 60 + 1*start[1]))/60;
}

export default getTimeDiff;