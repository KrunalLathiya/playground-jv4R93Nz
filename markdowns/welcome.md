# Conditional Statements in VueJS!

**Vue.js** is quite famous front end library in nowadays. So It is worth to take a look at it. It is simple, minimal core with an incrementally adoptable stack that can handle apps of any scale. **Vue (pronounced /vjuː/, of view)** is a progressive framework for building user interfaces. The core library is focused on the view layer only and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications.

# v-if Statement
Suppose, we have one HTML element which is we need to show only some condition holds true otherwise we do not want to show then in that kind of scenario, we need to do this kind of conditional statement.
When the condition holds false, it completely removes the element from the dom.

For example, In the form element, we need to display the errors only user has not input any value then we can use this kind of statement to show the errors of the input field.

### Example
In this example, we will use a button to show and hide the particular element using **v-if** condition.

First, we take one button element and when we press that button if the text underneath of **p** element is showing then change it to hide and if the text is hide then change it to show. Means we are just changing the **true** or **false** condition on the event of button press. So it is **click event** of any button as we have used in **jQuery**.

@[Simple v-if conditional example]({"stubs": ["index.html", "main.js"], "command": "/bin/bash run.sh"})

# v-show statement

Basically, it does the same thing as **v-if statement** but there is one major difference. In case of v-if statment, if condition false then it completely removes the element and in case of **v-show statement**, it adds the **CSS** property of **style** display **none**.
So **v-show** just hides the element, not remove from the DOM.

@[Simple v-show conditional example]({"stubs": ["index1.html", "main1.js"], "command": "/bin/bash run1.sh"})