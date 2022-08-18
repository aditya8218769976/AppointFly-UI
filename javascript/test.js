// const uid = "adi@731";

// var firstName = "Aditya";
// var lastName = "Mishra";
// var countryName = "India";
// var email = "adi821876@gmail.com";
// var password = 123456;
// var isLoggedInFromGoogle = false;
// var isLoggedInFromFacebook = true;
// var inWhichState = "Uttrakhand";

// console.log(`

// With Uique Id: ${uid}
// User Is : ${firstName} ${lastName}
// of  : ${inWhichState}
// from : ${countryName}
// and his email is : ${email}
// with password : ${password}
// and is logged from : ${isLoggedInFromFacebook}

// `);

// var user = "guest";

// switch (user) {
//   case "admin":
//     console.log("You get full access");

//     break;
//   case "participants":
//     console.log("You can receive/send texts and watch reels");

//     break;
//   case "friendsOfFriend":
//     console.log("You get access to read comments");

//     break;
//   case "guest":
//     console.log("need to login/sign up");

//     break;
//   default:
//     console.log("you can try later");
//     break;
// }

function greet(user) {
  //   if (name === "Shanks") {
  //     console.log(`hello Luffy, good luck. You will be the pirate king`);
  //   } else {
  //     console.log("Hello Aditya ");
  //     console.log(`Hello, ${name}. Let's turn the world upside down`);
  //   }

  switch (user) {
    case "admin":
      console.log("You get full access");

      break;
    case "participants":
      console.log("You can receive/send texts and watch reels");

      break;
    case "friendsOfFriend":
      console.log("You get access to read comments");

      break;
    case "guest":
      console.log("need to login/sign up");

      break;
    default:
      console.log("you can try later");
      break;
  }
}
greet("admin");
// greet("Ronoa");
// greet("Shanks");
