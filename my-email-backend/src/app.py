from flask import Flask
from config import Config
from routes.email_routes import email_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    app.register_blueprint(email_routes)

    if app.config['DEBUG']:
        from routes.test_routes import test_routes
        app.register_blueprint(test_routes)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=app.config['DEBUG'])