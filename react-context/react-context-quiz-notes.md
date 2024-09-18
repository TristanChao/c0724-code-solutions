# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  - react context lets you pass data among multiple components without having to pass down from parent to child multiple times
- What values can be stored in context?
  - a context typically stores an object that can hold basically anything: strings, numbers, objects, functions
- How do you create context and make it available to the components?
  - context is created as a variable using the createContext function
  - the Context.Provider tag is wrapped around all components that will need access to it
- How do you access the context values?
  - by calling the useContext hook with the context name, you will get object back, from which you can destructure properties
- When would you use context? (in addition to the best answer: "rarely")
  - you would use context (rarely) when you have data that needs to be accessed by a parent and several descendants, especially when they are multiple levels down
  - this would prevent you from needing to pass a state down from the parent through multiple children that may not even need to access the state themselves, only pass it down further

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
