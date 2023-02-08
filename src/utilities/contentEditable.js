

// onKeyDown
export const seveContentAfterPressEnter = (e) => {
  if (e.key === "Enter") {
    e.target.blur();
  }
};

// onInputValue when click
export const selectAllInlineText = (e) => {
  e.target.select();
};