# Conditional Statements in VueJS!

**Vue.js** is quite famous front end library in nowadays. So It is worth to take a look at it. It is simple, minimal core with an incrementally adoptable stack that can handle apps of any scale. **Vue (pronounced /vjuː/, of view)** is a progressive framework for building user interfaces. The core library is focused on the view layer only and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications.

# v-if Statement
Suppose, we have one HTML element which is we need to show only some condition holds true otherwise we do not want to show then in that kind of scenario, we need to do this kind of conditional statement.

For example, In the form element, we need to display the errors only user has not input any value then we can use this kind of statement to show the errors of the input field.

<h3>Example 1</h3>
In below code, I have defined one property called <strong>display</strong>. This **display** property is by default set to **true**. It means that in the index.html file, **p** tag is displaying because we have set the condition to true. Now, if you change it to false and again run the snippet then **v-if** condition holds false and we no longer see the text with in **p** tag.

@[Simple v-if conditional example]({"stubs": ["index.html", "main.js"], "command": "/bin/bash run.sh"})
