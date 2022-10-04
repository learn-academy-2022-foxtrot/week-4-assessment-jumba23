# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP programing is based on objects. Everything we ever need and use will be inside of an object. While functional programing uses functions as their "first class citizens". In this case, just a look at their names can help us differentiate between different tools they use while trying to solve same problems.

Researched answer: OOP and functional programing use different methods for storing and manipulating data. In the case of functional programing, data cannot be stored in objects, while in OOP data is only stored in objects. The way to manipulated data in functional programing is trough using functions. OOP gives importance to data, rather than procedures where as functional programing does the opposite. OOP provides an easier way to add new data and functions to an object, where functional programing is a bit more challenging.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Integer in Ruby, as well as many other programing languages, are whole numbers. Negative and positive. Everything with a decimal, is categorized under floats. Even in a number is whole but written with decimal (ex, 122.0), it is still considered float.

Researched answer: Ruby will consider any number written with decimal as float, while any number without decimal as integer. In order to convert a variable into integer we use to_i command. At the same time we can use to_f command to get float.

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit, in programing sense, means, the return statement is already there (implied) so we do not have to specifically return a value. In Javascript this is not the case, while in many other languages it is. This includes Ruby.

Researched answer: When return is not explicitly called within a method, Ruby returns the value of the last executed instruction in the method. For example, in javascript, when using an arrow function notation and keep the code on one line, implicit return is applied without a need to add "return".

4. What is a block in Ruby?

Your answer: Ruby block is an anonymous function passed into a method to produce a desired result. Usually they start with "do" and end with "end" and are contained withing curly brackets {}

Researched answer: A block statement is the same thing as a method, BUT it does not belong to an object. Block does not have their own name, it only accepts arguments and returns values. In other programing languages Ruby blocks are called closures. To call a block within a method with a value we can use a "yield" statement.

1. How do you extract a value in a Ruby hash?

Your answer: In order to access/extract a value in Ruby we use key-value approach. Which basically means, first we write the name of the hash, followed by square brackets with the key value. "Puts" command will give us the value of this key-value pair.

Researched answer: in Ruby calling a hash followed by a key name within brackets grabs the value associated with that key. We can also use .extract to access specific data for example, user.extract!("email").keys # ["john@email"] where we want to access emails with value of "john@email". Extract can be further chained with .key or .values, depending on our task at hand.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: is OBJECT-relational database management system that uses SQL in working with databases. . It is well established system with more than 20 years of track record. PostgreSQL is used for warehousing data for many web, mobile, GPS and analytics applications. In comparing with microsoft SQL server, which is known as relational database system, PostgreSQL offers more complex data types and allows object inheritance thus making it little more complex to work with.

2. Ruby on Rails: Ruby on rails is a server side web application framework. It is used as a web developer's a tool-kit for building applications and websites. As any other framework, it is heavily "opinionated" which can be a good or a bad thing. It all depends on what kind of a developer you are and what kind of application you are looking to build. It provides MVC structure right of the bat, so you do not have to worry much about planing, though this should not be taken in in lightly or literally. Or at least not as much as it would take building React-Node.js. Since Ruby on Rails is a full framework, it comes with a lot of boilerplate tools and templates ready to go and can get your application up an ruining fairly quickly with very little coding.

3. ORM: stands for Object-relational mapping. It is used in work with database data structures and it is meant to simplify the experience of interacting wth database. It gives us a watered down version of CRUD API that is much easier to learn, in comparing with, for example SQL. In essence, it helps you work with databases without necessarily knowing SQL any more. ORM comes in handy in cases where you do not have the time or patience for steep SQL learning curve but would like to manipulate database and get your app up and running. It has its purpose, you just need to find out if it is for you.

4. Active Record: in general sense, active record is the "M" IN MVC model. It facilitates the creation and use of objects that need to be stored in a database. In the case of Ruby Active Record is an ORM. It is a layer of Ruby code that runs between your database and your app code.

5. Migrations: come into play when we need to make change in our database, by migrating data from one or more source databases to one or more target databases by using preferred coding language. In the case of Ruby, once our code is executed, in order for change to happen in our database, "migrations" are called to action.
