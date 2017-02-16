# Let's Build a blog!

Learning a new framework comes with many challenges. Vue uses components, and passing shared data between these components can be difficult at first. 

Vue also has it's own router, and when learning about routes... this is confusing too. 

You have already built a working kanban/trello clone. 
Many web apps work in a similar manner. Currently, you have a board that creates multiple pages, each with their own lists. 

## Today's Project: 
- **The Home Page**

    - The home page should be a component that shows the titles of each of your blog posts. You should also be able to create new blog post on the homepage. 
    
    - If you click on the title of a blog post on the homepage, it should direct you to a new page where the user can view the blog post title and body. 
    
    - The URL to your homepage should be localhost:8080/#/home
    
- **Blog Component**

    - A blog should contain a title and a body. 
    - Each blog should also have a home button that will redirect the user to the homepage so they can view. 
    - The URL for your blog posts should be localhost:8080/post/<BLOG POST TITLE>
    
- **Creating a Post**

    - Your user will also need to create a blog post. 
    - If your user goes to localhost:8080/create , it should have a form that takes in a title and a body for the blog post. 


_Hints_:
- Make sure to use the Vue Router for your routes, and correctly nest your components.
- **Use your kanban project for reference. This project is very similar**
- Refer to the Vue or Vue-Router docs if you need help, or ask a TA. 
