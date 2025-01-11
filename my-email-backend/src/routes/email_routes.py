from flask import Blueprint, request, jsonify, current_app
from services.email_service import EmailService
import ipinfo

email_routes = Blueprint('email_routes', __name__)

def get_location_from_ip(ip):
    access_token = current_app.config['IPINFO_TOKEN']
    handler = ipinfo.getHandler(access_token)
    try:
        details = handler.getDetails(ip)
        return details.country_name, details.city
    except Exception as e:
        current_app.logger.error(f"Failed to get location from IP: {e}")
        return None, None

@email_routes.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    subject = data.get('subject')
    body = data.get('body')
    sender = data.get('sender')
    name = data.get('name')
    ip = data.get('ip')
    referer_url = data.get('referer_url')
    browser = data.get('browser')
    device = data.get('device')

    if not subject or not body or not sender or not name or not ip or not referer_url or not browser or not device:
        return jsonify({'error': 'Missing required fields'}), 400

    country, city = get_location_from_ip(ip)

    email_service = EmailService(current_app)
    success = email_service.send_email(subject, body, sender, name, country, city, referer_url, browser, device)

    if success:
        return jsonify({'message': 'Email sent successfully'}), 200
    else:
        return jsonify({'error': 'Failed to send email'}), 500