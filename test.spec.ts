import axios from 'axios';

async function getUsernames(threshold: number) {
  const result = await axios.get('https://jsonmock.hackerrank.com/api/article_users');

  const validUsers: any[] = [];
  for (const user of result.data.data) {
    if (user.submission_count > threshold) {
      validUsers.push(user);
    }
  }

  return validUsers.map(user => user.username)
}

test('Get usernames', async() => {
  const users = await getUsernames(10);
  console.log(users);
});

