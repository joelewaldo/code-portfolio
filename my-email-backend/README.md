# my-email-backend/README.md

# My Email Backend

This project is a simple email backend built with Flask that allows you to send emails using a specified email service.

## Project Structure

```
my-email-backend
├── src
│   ├── app.py                # Entry point of the application
│   ├── config.py             # Configuration settings
│   ├── routes
│   │   └── email_routes.py    # Routes for email functionality
│   ├── services
│   │   └── email_service.py    # Logic for sending emails
│   └── templates
│       └── email_template.html  # HTML template for email content
├── requirements.txt           # Project dependencies
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/joelewaldo/code-portfolio.git
   cd my-email-backend
   ```

2. Create a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

4. Set up your environment variables in the `.env` file.

5. Run the application:
   ```
   python src/app.py
   ```

## Usage

To send an email, make a POST request to the `/send-email` route with the necessary data. The email will be sent using the configured email service.

## License

This project is licensed under the MIT License.
