import logging
from flask import render_template
from datetime import datetime

class EmailService:
    def __init__(self, app):
        self.app = app
        self.mail = self.init_mail()
        self.my_email = app.config['MY_EMAIL']

    def init_mail(self):
        from flask_mail import Mail
        mail = Mail(self.app)
        return mail

    def send_email(self, subject, body, sender, name, country, city, referer_url, browser, device):
        from flask_mail import Message
        timestamp = datetime.now().strftime('%m.%d.%Y %H:%M')
        msg = Message("New Submission for Code Portfolio", recipients=[self.my_email], sender=sender)
        msg.html = render_template('email_template.html', sender=sender, subject=subject, body=body, name=name, timestamp=timestamp, country=country, city=city, referer_url=referer_url, browser=browser, device=device)
        try:
            with self.app.app_context():
                self.mail.send(msg)
            return True
        except Exception as e:
            logging.error(f"Failed to send email: {e}")
            return False