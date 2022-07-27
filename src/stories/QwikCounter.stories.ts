import { render } from '@builder.io/qwik';
import { QWIK_LOADER } from '@builder.io/qwik/loader/index';
import { renderToString } from '@builder.io/qwik/server';
//import loader from '@builder.io/qwik/loader';
//import { getQwikLoaderScript } from '@builder.io/qwik/server';
import { Story, Meta } from '@storybook/html';
import { Counter } from '..';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Qwik/Counter',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
  },
} as Meta;


// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<{}> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  const div = document.createElement('div')

  // With just the `render` call and not the loader, qwik doesn't seem to be listening for events
  // Ugly way to get the qwik loader script and to listen for dom events.
  eval(QWIK_LOADER);

  render(div, Counter, true).then(() => {
    console.log('rendered')
  }, (err) => console.error(err))
  console.log(div)

  /* 
  // If we want to pass an html string to storybook, we could use the `renderToString` function.
  // But this doesn't not run on the server and it's failing in the browser.
  renderToString(Counter, {fragmentTagName: 'div'}).then((html) => {
    console.log(html)
  })*/
  return div;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
