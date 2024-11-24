from flask import render_template, current_app
from flask_mail import Message
from mail import mail

def send_email(to, subject, template, **kwargs):
    try:
        template_path = f'email/{template}'
        html_body = render_template(template_path, **kwargs)

        msg = Message(current_app.config['CIENCIASMART_MAIL_SUBJECT_PREFIX'] + subject,
                      recipients=[to],
                      html=html_body)

        mail.send(msg)
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

