const http = require('http');
const { URL } = require('url');

const port = Number(process.env.PORT || 3100);

function html(title, body) {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body { font-family: system-ui, sans-serif; margin: 2rem; }
      form, .box { display: grid; gap: 0.5rem; max-width: 460px; }
      input, button { padding: 0.55rem; }
      ul { padding-left: 1.25rem; }
    </style>
  </head>
  <body>
    ${body}
  </body>
</html>`;
}

function send(res, status, contentType, content) {
  res.writeHead(status, { 'content-type': contentType });
  res.end(content);
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://127.0.0.1:${port}`);
  const path = reqUrl.pathname;

  if (path === '/health') {
    return send(res, 200, 'application/json', JSON.stringify({ ok: true }));
  }

  if (path === '/') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html(
        'Playwright Docs ES',
        `
        <main>
          <h1>Laboratorio Playwright</h1>
          <p>Servidor local para ejemplos de la serie.</p>
          <nav class="box">
            <a href="/login">Login</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/todos">Todo MVC mini</a>
            <a href="/exports">Exports</a>
          </nav>
        </main>
      `,
      ),
    );
  }

  if (path === '/login') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html(
        'Login',
        `
        <h1>Login</h1>
        <form id="login-form">
          <label>Email <input name="email" type="email" value="qa@example.com" /></label>
          <label>Password <input name="password" type="password" value="secret" /></label>
          <button type="submit">Entrar</button>
        </form>
        <script>
          document.querySelector('#login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('auth_user', 'qa@example.com');
            window.location.href = '/dashboard';
          });
        </script>
      `,
      ),
    );
  }

  if (path === '/dashboard') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html(
        'Dashboard',
        `
        <h1>Dashboard</h1>
        <p id="current-user"></p>
        <script>
          const user = localStorage.getItem('auth_user') || 'anon';
          document.querySelector('#current-user').textContent = 'Usuario: ' + user;
        </script>
      `,
      ),
    );
  }

  if (path === '/admin' || path === '/editor' || path === '/viewer') {
    const role = path.slice(1);
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html('Roles', `<h1>${role}</h1><p>Area de ${role}</p>`),
    );
  }

  if (path === '/tiendas') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html('Tiendas', '<h1>Tiendas cercanas</h1><p>Madrid</p>'),
    );
  }

  if (path === '/exports') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html(
        'Exports',
        `
        <h1>Exportador</h1>
        <p id="status">Procesando...</p>
        <script>
          setTimeout(() => {
            document.querySelector('#status').textContent = 'Completado';
          }, 600);
        </script>
      `,
      ),
    );
  }

  if (path === '/todos') {
    return send(
      res,
      200,
      'text/html; charset=utf-8',
      html(
        'Todos',
        `
        <h1>Todos</h1>
        <form id="todo-form">
          <label>Nueva tarea <input aria-label="Nueva tarea" id="todo-input" /></label>
          <button type="submit">Agregar</button>
        </form>
        <ul id="todo-list"></ul>
        <script>
          const form = document.querySelector('#todo-form');
          const input = document.querySelector('#todo-input');
          const list = document.querySelector('#todo-list');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = input.value.trim();
            if (!value) return;
            const li = document.createElement('li');
            li.textContent = value;
            list.appendChild(li);
            input.value = '';
          });
        </script>
      `,
      ),
    );
  }

  send(res, 404, 'text/plain; charset=utf-8', 'Not found');
});

server.listen(port, () => {
  // Mensaje simple para debugging local.
  console.log(`[playwright-docs-es] dev server en http://127.0.0.1:${port}`);
});
