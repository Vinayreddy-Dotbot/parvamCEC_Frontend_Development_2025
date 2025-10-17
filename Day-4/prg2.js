var msg = "Welcome to JavaScript!";
        console.log(msg);

        let mssg="Welcome to ES6";
        console.log(mssg);

        const greeting={
            Text:"Welcome",
            sender:"System"
        };
        console.log(greeting);

        function helloFunction(){
            console.log("Hello from function!");
        }
        helloFunction();

        helloArrowFunction=()=>{
            console.log('Hello from arrow function!');
        }
        helloArrowFunction();

        hello=()=>{
            console.log('Hello from concise arrow function!');
        }
        hello();
        hi=()=>{
            console.log('Hello from another concise arrow function!');
        }
        hi();