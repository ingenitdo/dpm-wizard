export const dropShadow = {
  webkitBoxShadow: "0px 3px 6px 0px rgba(0,0,0,0.15)",
  mozBoxShadow: "0px 3px 6px 0px rgba(0,0,0,0.15)",
  boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.15)"
};


export const fadeIn = {
  animation: "fadeIn ease 0.5s",
  "@keyframes fadeIn": {
    "0%": {opacity:0},
    "100%": {opacity:1}
  }
};
export const fadeOut = {
  animation: "fadeOut ease 0.5s",
  "@keyframes fadeOut": {
    "0%": {opacity:1},
    "100%": {opacity:0}
  }
};
