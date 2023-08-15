import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 600,
  duration: '30s',
}

export default function () {
  const before = new Date().getTime();
  const T = 6

  for (let i = 0; i < 10; i++) {
    http.get('http://127.0.0.1:3000/users');
  }

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
}
