# Understanding APIs

## How APIs Work

An API (Application Programming Interface) allows different software applications to communicate with each other. It provides a set of rules and endpoints that developers can use to interact with a service or data source.

### Key Concepts:

- **Endpoint**: A URL that represents a specific resource or action.
- **HTTP Methods**: Common methods include `GET` (retrieve data), `POST` (send data), `PUT` (update data), and `DELETE` (remove data).
- **Response**: The data returned by the API, often in JSON format.

---

## Exercise: Call the Pokémon API

### Instructions:

1. Open your browser's developer tools (usually `F12` or `Ctrl+Shift+I`/`Cmd+Option+I`).
2. Go to the "Console" tab.
3. Copy and paste the following code to fetch data about a Pokémon:

```javascript
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

4. Press `Enter` to run the code.
5. Check the console for the Pokémon data.

### Challenge:

- Modify the code to fetch data for a different Pokémon by changing `pikachu` in the URL.
- Try logging specific properties like `data.name` or `data.abilities`.

---

Happy coding!
