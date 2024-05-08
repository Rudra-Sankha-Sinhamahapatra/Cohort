// App.js
import React, { useEffect } from 'react';

const reactElement = {
  type: 'a',
  props: {
    href: 'https://github.com/Rudra-Sankha-Sinhamahapatra',
    target: '_blank',
    children: `Rudra's Github Profile`,
  },
};

function generateHTML(reactElement) {
  const { type, props } = reactElement;
  const { href, target, children } = props;

  return `<${type} href="${href}" target="${target}">${children}</${type}>`;
}

function customRender(element, containerId) {
  const html = generateHTML(element);
  const container = document.getElementById(containerId);
  container.innerHTML = html;
}

function App() {
  useEffect(() => {
    customRender(reactElement, 'root');
  }, []);

  return (
    <div id="root">
      {/* Content will be dynamically inserted here */}
    </div>
  );
}

export default App;
