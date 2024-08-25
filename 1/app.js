const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<body><h1>Welcome to nodejs </h1>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></input></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    res.setHeader("content-type", "text/html");
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    });
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<ul>");
    res.write("<li>User1</li>");
    res.write("<li>User2</li>");
    res.write("<li>User3</li>");
    res.write("<li>User4</li>");
    res.write("</ul>");
    res.write("</html>");
    return res.end();
  }
});
server.listen(3000);
