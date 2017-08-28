import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const list1 = React.createElement('li', {}, 'JavaScript')
const list2 = React.createElement('li', {}, 'React')
const list3 = React.createElement('li', {}, 'Movies')
const list4 = React.createElement('li', {}, 'Ice cream')
const unorderedList = React.createElement('ul', {className: 'my-interests'}, [list1, list2, list3, list4]);


const meInReact = React.createElement('div', {className: "me"}, [title, paragraph, unorderedList]);


ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
