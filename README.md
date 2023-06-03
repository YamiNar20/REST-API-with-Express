# REST-API-with-Express
Make sure you have Node.js installed on your machine. You can download it from the official website: https://nodejs.org

Open your preferred terminal or command prompt.

Navigate to the project directory where your app.js file is located.

Install the necessary dependencies by running the following command:
Start the server by running
node app.js

The server will start running and listening on port 3000. You should see a message in the terminal indicating that the server is running.

Now you can use the API endpoints:

To get a list of items, send a GET request to http://localhost:3000/items.
To add a new item, send a POST request to http://localhost:3000/items with a JSON body containing name and price fields.
To get a specific item by ID, send a GET request to http://localhost:3000/items/:id, where :id is the ID of the item you want to retrieve.
To update an item, send a PUT request to http://localhost:3000/items/:id with a JSON body containing name and price fields.
To delete an item, send a DELETE request to http://localhost:3000/items/:id, where :id is the ID of the item you want to delete.
You can use tools like Postman, cURL, or any web browser to test the API endpoints and interact with the application.

Remember to replace :id with the actual ID of the item you want to retrieve, update, or delete.
