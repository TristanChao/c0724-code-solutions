# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  - NPM is a software registry that allows developers to share and borrow packages, as well as reuse their own code
- What is a package?
  - a package is a directory with one or more files in it
- What are some other popular package managers?
  - yarn and pnpm
- How can you create a `package.json` with `npm`?
  - use the `npm init` command and fill out the questionnaire
- What is a dependency and how do you add one to a package?
  - a dependency is a package that adds functionality to another package and is required for the other package to work properly
  - you can add a dependency by using the `npm install` command with the name of the package
- What happens when you add a dependency to a package with `npm`?
  - the package.json file will update with the dependency
- What is a devDependency and how do you add one to a package?
  - a devDependency is a dependency that is only used for development, such as eslint, which finds errors in the IDE
  - you can add a devDependency by using the `npm install` command with the `--save-dev option`
- How do you define and run `npm` scripts? Why are these useful?
  - in the package.json file, find or create a "scripts" key with curly braces
  - in the curly braces, create a key that is the script name with some terminal commands following
  - these scripts have groups of commands that can be run quickly by calling the key with the `npm run` command

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
