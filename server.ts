import express from 'express';

const app = express();

// listen for requrests
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
