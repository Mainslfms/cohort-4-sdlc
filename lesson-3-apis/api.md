# Understanding APIs

## How APIs Work

An API (Application Programming Interface) allows different software applications to communicate with each other. It provides a set of rules and endpoints that developers can use to interact with a service or data source.

### Key Concepts:

- **Endpoint**: A URL that represents a specific resource or action.
- **HTTP Methods**: Common methods include `GET` (retrieve data), `POST` (send data), `PUT` (update data), and `DELETE` (remove data).
- **Response**: The data returned by the API, often in JSON format.
- **Documentation**: A guide provided by the API provider that explains how to use the API, including available endpoints, parameters, and response formats. 
- **Authentication**: Some APIs require an API key or token to access their data. This is a way to verify the identity of the user or application making the request.
- **Rate Limiting**: Many APIs limit the number of requests you can make in a certain time period to prevent abuse. This is often specified in the API documentation.


---

## Exercise: Call the Pokémon API

### Instructions:

1. Open your browser's developer tools (usually `F12` or `Ctrl+Shift+I`/`Cmd+Option+I`).
2. Go to the "Console" tab.
3. Copy and paste the following code to fetch data about a Pokémon:

## Function to Use: 
these are two examples of how to fetch data from an API using JavaScript. You can use either of them. Both use different methods to handle asynchronous operations.



```javascript
const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

const fetchPokemonAsync = async (pokemon) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

4. Press `Enter` to run the code.
5. Check the console for the Pokémon data.

### Challenge:

- Go to [Pokémon API](https://pokeapi.co/docs/v2#pokemon) and explore the documentation.
- Modify the code to fetch data for a different Pokémon by changing `pikachu` in the URL.
- Try logging specific properties like `data.name` or `data.abilities`.

