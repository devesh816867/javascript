//singleton
//objects.create

//object literals

const mySum= Symbol("key1")

const jsUser={
    name: "devesh",
    "full name":"devesh sharmaa",
    [mySum]:"mykey1",
    age:18,
    location: "bihar",
    email:"devesh@gmail.com",
    isloggedin:false,
    LastLoginDays:['Monday','saturday']

}
console.log(jsUser.email)
console.log(jsUser["email"])

jsUser.email="devesh@123gmail.com"
//Object.freeze(jsUser)
jsUser.email="devesh@google.com"
console.log(jsUser.email)


jsUser.greeting=function(){
    console.log("Hello js User")
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())