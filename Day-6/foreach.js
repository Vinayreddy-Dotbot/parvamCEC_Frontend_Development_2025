const users=[
    {name:"Alice",active:false},
    {name:"Bob",active:false},
    {name:"Charlie",active:false},
];
users.forEach((user)=>(user.active=true));
console.log(users);

const userDetails=[
    {name:"Alice",email:"Alice@gmail.com"
    },
    {name:"Bob",email:"bob@gmail.com"},
    {name:"Charlie",email:"Charlie@gmail.com"}
];
const notifications=[];
userDetails.forEach((user)=>{
    notifications.push(`Email sent to ${user.name} at ${user.email}`);

});
console.log(notifications)