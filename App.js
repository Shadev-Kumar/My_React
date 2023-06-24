const heading = React.createElement(
  'h1',
  { id: 'headingh1', xyz: 'abc' },
  'Hello alpha from React!',
)
// console.log(heading)

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Hi i am a h1 tag!'),
    React.createElement('h2', {}, 'Hi i am a h2 tag!'),
    React.createElement('h3', {}, 'Hi i am a h3 tag!'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Hi i am a h1 tag!'),
    React.createElement('h2', {}, 'Hi i am a h2 tag!'),
    React.createElement('h3', {}, 'Hi i am a h3 tag!'),
  ]),
])

// console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
const root2 = ReactDOM.createRoot(document.getElementById('root2'))

root.render(parent)
root2.render(heading)
