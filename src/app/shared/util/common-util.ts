
//for mobile tablet
export const isMobileResolution = (): boolean => {
  if (window.innerWidth <= 912) {
    return true;
  } else {
    return false;
  }
};
//only mobile
export const isMTabResolution = (): boolean => {
  if (window.innerWidth <= 568) {
    return true;
  } else {
    return false;
  }
};




