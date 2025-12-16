window.addEventListener('message', (event) => {
    if (event.data.type === 'oauth_callback') {
      alert(`User authenticated!\nEmail: ${event.data.payload.email}\nToken: ${event.data.payload.token}`);
    }
  });
  function openOAuthWindow() {
    // Simulate the opening of a Google OAuth window
    const oauthWindow = window.open("", "Google OAuth", "width=500, height=600");
    
    oauthWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Google OAuth - Mock</title>
        </head>
        <body>
          <h2>Sign in with Google</h2>
          <form onsubmit="handleSubmit(event)">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Sign In</button>
          </form>

          <script>
            function handleSubmit(event) {
              event.preventDefault();
              const email = document.getElementById('email').value;
              const password = document.getElementById('password').value;

              // Close the OAuth window and simulate a callback to the main window
              window.opener.postMessage({
                type: 'oauth_callback',
                payload: {
                  email: email,
                  token: 'mock-oauth-token',
                }
              }, '*');

              window.close();
            }
          </script>
        </body>
      </html>
    `);
  }
