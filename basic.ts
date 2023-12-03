let x: string = "darya";

const getFullName = (user: { firstname: string; surname: string }): string => {
  return `${user.firstname} ${user.surname}`;
};

const user = {
  firstname: "darya",
  surname: "markova",
  age: 5,
};

getFullName(user);

const office: {
  officeId: number;
  isOpened: boolean;
  contacts: { phone: string; email: string; address: { city: string } };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: "+79100000000",
    email: "my@email.ru",
    address: {
      city: "Москва",
    },
  },
};

const skills: [number, string, number] = [1, "Dev", 5];

const arr: [number, string, ...boolean[]] = [1, "sdf", true, true];

const readOnlySkills: ReadonlyArray<string> = ["Dev", "DevOps"];

enum StatusCode {
  SUCCESS = 1,
  FAILED,
  PENDING,
}

function action(status: StatusCode) {}

action(StatusCode.PENDING);

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

/* Упражнение: типизация функции */

enum QuestionStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

async function getFaqs(request: {
  topicId: number;
  status: QuestionStatus;
}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
}> {
  return fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(request),
  }).then((response) => response.json());
}
