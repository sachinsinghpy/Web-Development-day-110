# Web-Development-day-110
Conditional Rendering in React
Conditional rendering allows dynamic control over which UI elements or content are displayed based on specific conditions. It is commonly used in programming to show or hide elements depending on user input, data states, or system status. This technique improves user experience by ensuring that only relevant information is presented at a given time. It enables components to display different outputs depending on states or props. This ensures that the UI updates dynamically based on logic instead of manually manipulating the DOM.

Implementation of Conditional Rendering
1. Using If/Else Statements
If/else statements allow rendering different components based on conditions. This approach is useful for complex conditions.


function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✅</li>;
    }
    return <li className="item">{name}</li>;
}
f isPacked is true, it displays: Space Suit ✅
If isPacked is false, it displays: Space Suit
2. Using Ternary Operator
The ternary operator (condition ? expr1: expr2) is a concise way to conditionally render JSX elements. It’s often used when the logic is simple and there are only two options to render.

function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;
}

If isLoggedIn is true: Welcome Back!
If isLoggedIn is false: Please Sign In 

3. Using Logical AND (&&) Operator
The && operator returns the second operand if the first is true, and nothing if the first is false. This can be useful when you only want to render something when a condition is true.

function Notification({ hasNotifications }) {
    return <div>{hasNotifications && <p>You have new notifications!</p>}</div>;
}
If hasNotifications is true: You have new notifications!
If hasNotifications is false: Nothing is rendered.


4. Using Switch Case Statements
Switch case statements are useful when you need to handle multiple conditions, which would otherwise require multiple if conditions. This approach can be more readable if there are many conditions to check.

function StatusMessage({ status }) {
    switch (status) {
        case 'loading':
            return <p>Loading...</p>;
        case 'success':
            return <p>Data loaded successfully!</p>;
        case 'error':
            return <p>Error loading data.</p>;
        default:
            return <p>Unknown status</p>;
    }
}
If status is 'loading': Loading...
If status is 'success': Data loaded successfully!
If status is 'error': Error loading data.

5. Conditional Rendering in Lists (Using .map())
Conditional rendering can be helpful when rendering lists of items conditionally. You can filter or map over an array to selectively render components based on a condition.

const items = ["Apple", "Banana", "Cherry"];
const fruitList = items.map((item, index) =>
    item.includes("a") ? <p key={index}>{item}</p> : null
);
If the item contains letter "a", it will be displayed.


6. Conditional Rendering with Component State
You can also manage conditional rendering based on the component's state. For example, you can show a loading spinner until some data is fetched, and then display the actual content once the data is ready.

Syntax:

if (loading) {
  // Render Loading Component
} else {
  // Render Data Component
}
