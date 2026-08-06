1. What packages do I need to install in the terminal to set up React Hook Form and Zod in a Vite project?
2. What is @hookform/resolvers, and why do we need it to connect Zod to React Hook Form?
3. Where is the cleanest place in a React folder structure to store helper files like validation schemas and constants?
4. How does conditional rendering like {step === 1 && <StepOne/>} work on a single route?
5. What does "Lifting State Up" mean in React, and why did we put our main form controller inside App.jsx instead of inside each individual step component?
6. If a user types their name in Step 1, navigates to Step 2, and clicks "Back," how does the data survive without getting erased?
7. How do we prevent the "Back" button from being clicked when the user is on Step 1?
8. Why did we use Math.min(prev + 1, 3) and Math.max(prev - 1, 1) to update our step counter?
9. How do we pass props from a parent controller component down to child step components?
10. How can we allow users to press the Enter key on their keyboard to advance to the next step or submit the form?
11. Why does my entire React webpage hard-refresh and flash white every time I click the "Next" or "Back" button?
12. Why do we add the noValidate attribute to our <form> tag when using custom schema validation?
13. What is the difference between a "controlled" React input (using useState + onChange) and an "uncontrolled" input?
14. Why does standard useState form handling cause performance issues in large enterprise applications?
15. What is React Hook Form (react-hook-form), and how does it prevent the entire component tree from re-rendering on every keystroke?
16. What does {...register("firstName")} actually do under the hood when we attach it to an <input> tag?
17. What is const formData = watch() in React Hook Form, and why did we use it for our Step 3 Review screen?
18. What is trigger() in React Hook Form, and why do we call await trigger(stepFields[step]) before moving to the next step?
19. Why is trigger() an asynchronous function that requires async/await?
20. How does reset() work when we want to clear the form and start a brand new registration from Step 1?
21. What does setting mode: "onChange" do inside useForm({ ... })?
22. How does React Hook Form store error messages inside the formState: { errors } object?
23. What is Zod, and why is it considered the industry standard for TypeScript/JavaScript schema validation?
24. What is a Regular Expression (Regex), and how does Zod validate email formats without us having to write complex regex strings by hand?
25. How do .min(), .email(), and .trim() work together when defining a string rule in Zod?
26. How do we validate that password and confirmPassword strictly match using Zod's .refine() method?
27. What does path: ["confirmPassword"] do inside a Zod .refine() function?
28. Why did we create an object called stepFields in schema.js ({ 1: ["firstName", ...], 2: ["email", ...] })?
29. How does React Hook Form know which fields belong to Step 1 vs. Step 2 when we click the "Next" button?
30. Why do we write errors.firstName?.message with a question mark (?.) instead of just errors.firstName.message?
31. What is "Optional Chaining" (?.), and what happens if we try to access .message on an error object that is currently undefined?
32. How can we write a custom Zod refinement rule to check if a user is at least 18 years old based on their Date of Birth string?
33. How do we build a "Show/Hide Password" eyeball toggle in React without installing any external icon libraries?
34. How does dynamically switching type={showPassword ? "text" : "password"} reveal and hide password text in an input?
35. Why is it critical that the eyeball toggle button has type="button" inside the password field wrapper?
36. How do we use inline SVG icons in React for an open eyeball (show) and a slashed eyeball (hide)?
37. Why do we display the password as bullet points ("•".repeat(8)) on the Step 3 Review screen instead of showing the plain text?
38. How do we use Tailwind CSS conditional template literals to turn an input's border red (border-rose-500) when there is a validation error?
39. How do we style a disabled button in Tailwind CSS (disabled:opacity-40 disabled:cursor-not-allowed) so users know it can't be clicked?
40. Why this error comes "...", how should I fix it?
