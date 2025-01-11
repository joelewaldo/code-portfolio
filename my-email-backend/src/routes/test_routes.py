from flask import Blueprint, jsonify, current_app
from services.email_service import EmailService

test_routes = Blueprint('test_routes', __name__)

@test_routes.route('/test-email', methods=['GET'])
def test_email():
    email_service = EmailService(current_app)
    try:
        email_service.send_email('Test Subject', 'Test Body', current_app.config['MAIL_DEFAULT_SENDER'])
        return jsonify({'message': 'Test email sent successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500