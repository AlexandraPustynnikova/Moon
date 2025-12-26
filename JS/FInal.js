let name = "Sasha";
let age = 6;
let subscription = "free";
let lastlogin = 23;

//Шаг 1
if (typeof name !== "string") {
  name = String(name);
}

if (typeof age !== "number") {
  age = Number(age);
}

if (typeof subscription !== "string") {
  subscription = String(subscription);
}

if (typeof lastlogin !== "number") {
  lastlogin = Number(lastlogin);
}

//Шаг 2

function validateAge(age) {
  if (typeof age === "number" && age > 0) {
    return "correct age";
  }
  return "incorrect age";
}

console.log(validateAge(22));

const validateName = function (name) {
  return typeof name === "string" && name.length > 0
    ? "correct name"
    : "incorrect name";
};
console.log(validateName("fjg"));

const validateSubscription = (subscription) => {
  switch (subscription) {
    case "free":
      return "free";
      break;

    case "basic":
      return "basic";
      break;

    case "premium":
      return "premium";
      break;

    default:
      return "нет таких подписок";
  }
};

console.log(validateSubscription("free"));

//Шаг 3
function getTimeOfDay(lastlogin) {
  if (lastlogin >= 5 && lastlogin <= 11) {
    return "Утро";
  } else if (lastlogin > 11 && lastlogin <= 17) {
    return "День";
  }
  return lastlogin > 17 && lastlogin <= 21 ? "Вечер" : "Ночь";
}

console.log(getTimeOfDay(lastlogin));

//Шаг 4
function getAccessLevel(subscription) {
  switch (subscription) {
    case "premium":
      return "Полный доступ";
      break;
    case "basic":
      return "Ограниченный доступ";
      break;
    case "free":
      return "Доступ только к бесплатному контенту";
      break;

    default:
      return "Без подписки";
  }
}

console.log(getAccessLevel(subscription));

//Шаг 5, 6
let timeOfDay = getTimeOfDay(lastlogin);
let accessLevel = getAccessLevel(subscription);

function displayUserInfo(age, timeOfDay, lastlogin) {
  const name = "Иван";
  let underage;
  let lateTimeLogin;
  if (age < 18) {
    underage = " Вы несовершеннолетний пользователь.";
  }
  if (lastlogin < 22 && lastlogin > 5) {
    lateTimeLogin = " Позднее время для входа.";
  }
  return `Привет, ${name}! Вам ${age} лет.${underage || ""} Сейчас ${timeOfDay}.${lateTimeLogin || ""} Уровень доступа: ${accessLevel}.
`;
}

console.log(displayUserInfo(age, timeOfDay, lastlogin));

//Шаг 7
bonus = age % 10;
bonus += 5;
