const idk = delay =>
  setTimeout(() => {
    console.log(`Hello World. ${delay}`);
    idk(delay + 1);
  }, delay * 1000);

idk(1);