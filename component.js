// 기본 component
function createElement(type, props, ...children) {
  return { type, props, children };
}

function component(stateData) {
  const menuItems = stateData.map(item => createElement('a', { href: item.hash, class: 'menu-link' }, item.text));
  return createElement('div', { class: 'menu-container' }, ...menuItems);
}

function render(virtualDom) {
  if (typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}

const stateData = [
  { hash: '#김우진', text: '김우진' },
  { hash: '#김현',  text: '김현'  },
  { hash: '#방승희',  text: '방승희'  },
  { hash: '#변호녕',  text: '변호녕'  },
  { hash: '#소사무엘',  text: '소사무엘'  },
  { hash: '#송영준',  text: '송영준'  },
  { hash: '#신동현',  text: '신동현'  },
  { hash: '#오승민',  text: '오승민'  },
  { hash: '#유승민',  text: '유승민'  },
  { hash: '#윤준현',  text: '윤준현'  },
  { hash: '#이민구',  text: '이민구'  },
  { hash: '#이유안',  text: '이유안'  },
  { hash: '#이채이',  text: '이채이'  },
  { hash: '#정영식',  text: '정영식'  },
  { hash: '#최성민',  text: '최성민'  },
  { hash: '#최은철',  text: '최은철'  },
  { hash: '#홍문기',  text: '홍문기'  },
];

const virtualDom = component(stateData);
const container = document.getElementById('left');
container.appendChild(render(virtualDom));
