import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-46272889-1');
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname +
    window.location.search);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};