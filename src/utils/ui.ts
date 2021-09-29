const classNameBlockScroll = '--scroll-block';
const classNameBlur = '--blurred';

const scroll = {
  disable: () => document.body.classList.add(classNameBlockScroll),
  enable: () => document.body.classList.remove(classNameBlockScroll),
};
const blur = {
  enable: () => document.body.classList.add(classNameBlur),
  disable: () => document.body.classList.remove(classNameBlur),
};

export const appUI = {
  scroll,
  blur,
};
