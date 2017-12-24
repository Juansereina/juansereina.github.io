const post = data => fetch('/api/send', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify(data),
}).then(() => this.setState({ loading: true }))
  .catch(err => (err));

export default {
  post,
};

