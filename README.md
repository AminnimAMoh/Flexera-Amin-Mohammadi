# Flexera-Amin-Mohammadi
 Technical-Assessment

 Developed in Next.js and React.js.
 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production server:

First run:

```bash
npm run bild
# or
yarn build
```

Waith for build process to finish.

Next run the server:

```bash
npm run start
# or
yarn start
```

Unit test:

```bash
npm run test
# or
yarn run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[Descriptions:]

```Stylings
All style files are reserved in styles folder.
For styling the component I prefered to use scss and follow BEM naming principle to make the style sheets easier to read and maintain.

1-I have applied a faint shadow to the cards and remove the borders to give the cards a better appearance and highlight the balance on the page.

2-I carved the edges of cards, visible flag boxes, and image containers to emphasize a smoother appearance.

3-To bettering the awareness and visibility of the system I added the page number on top of the cards list so the user will always know what page they are at.

4-navigation arrows are stretched as the full width of the cards for a better balance between cards and navigation buttons.

5-For a better balance between typographies I limited the description to a specific size so all descriptions will be the same size.

6-To provide the full description I have applied the hover effect to the paragraph elements so the user can read the full content.

7-I have used colour coding for visible flags so it would be easy and quick for users to understand the differences.
```

```State Management
All applications context (state) relevant files stored in context folder.
To minimize the use of external libraries I prefered to use React hooks: useContex, useMemo, and useReducer.
I have saved the visible flag state and page number in local storage to maintain the changes accessible even after refreshing the page.
#These changes would be better to be saved to an API using Post and Put methods.

1-I reserved the page numbers in the local storage so the user would be able to access the last page they were at easier.

2-I have used one reducer as the number of actions is not very high and having all actions in one file is easier to read. Also, they share the same initial state.

3-The state management for the visible flags are explained in detail on pages>UserList>UserCards>index.tsx

4-As I am using spead syntax in few places TypeScript implimented to address the type and names of the props for a better understanding.
It also helps props/arguments deconstructions, possible null/undefined prevention, and type check.
```

```Unit Testing
I use Mocha and Chai for unit testing and only one test runs on the function that manages the props sending to the cards as it was not working as expected so I had to investigate it.
```

```HTML Elements
I have used meta elements for a better HTML layout and search engine benefits.
```

```Helps
All helpful links that helped me to fix issues are commented at the relevant step.
```











