const bedrock = require('bedrock-protocol');

const HOST = 'QwErTy-CE64.aternos.me';
const PORT = 19132;

function connect() {
  console.log('Подключаюсь...');

  const client = bedrock.createClient({
    host: HOST,
    port: PORT,
    username: 'QwErTyBot',
    offline: true
  });

  client.on('spawn', () => {
    console.log('QwErTyBot вошёл на сервер!');
  });

  client.on('error', (err) => {
    console.log('Ошибка:', err.message);
  });

  client.on('disconnect', () => {
    console.log('Отключён. Переподключение...');
    setTimeout(connect, 10000);
  });
}

connect();
