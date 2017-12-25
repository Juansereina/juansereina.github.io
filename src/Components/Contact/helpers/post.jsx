const post = data =>
  new Promise((resolve, reject) => {
    fetch('/api/send', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    }).then(res => resolve(res))
      .catch(err => reject(err));
  });

export default post;

