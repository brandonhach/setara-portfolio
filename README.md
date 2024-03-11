<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Personal portfolio website</h3>
</div>
<br>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This website is my portfolio where I can display my interests and projects in a clean and professional aesthetic. The layout style is inspired by [Bento.me](https://bento.me/en/home)

### Built With
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Language used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

<!-- GETTING STARTED -->
### Breakdown 

* I decided to use Next.Js for this project because of deployment. It was easy to set up since it comes pre-installed (by choice) with Tailwind and is easy to deploy by Vercel. You could say that I'm now stuck in Vercel's ecosystem but this is good enough for now. And it's free to deploy which is a plus for college students like myself.
* Many of the media used to populate the content of the webpage is mostly from Unsplash. The videos were cut by me using Adobe Premiere Pro. Since there is no database involved, all of my data is stored within `config/site-config.ts` to ensure that each component and page remains unpolluted with static data. Reusability is a key factor in building a good web application in React. 
* I divided my page into three main parent components: `leftside`, `rightside`, and `footer`. Leftside and footer contain a basic layout that did not take much time to implement. Rightside contains a child component `GridItem` from `/grid-items.tsx` that is responsible for returning a component with the appropriate configuration (`className` for tailwind, etc) based on the object type (retrieved from `config/site-config.ts`).
* `grid-item.tsx` uses three libraries: Class Variance Authority (cva) which is a utility library that helps me manage CSS classes when dealing with components that have multiple variations, clsx; a library that helps merge class names conditionally, and Framer motion; a popular and powerful motion library for React. This component works by taking variables `size`; used to define the size of the box, and `children`; content. This defines the basic layout that will be inherited from the `grid-items` folder which contains four child components. These child components provide the basic structure for each type of object which is derived from `config/site-config.ts`. It is conditionally displayed in `components/rightside.tsx`.
* DaisyUI; a popular UI framework is used in my project for minor detailing.
* In a nutshell, `config/site-config.ts` provides the data and context for my reusable components which is then stylized using tailwindCSS. 
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
