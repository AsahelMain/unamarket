import secrets
import string

def generate_temporary_password(length=15):
    chars = string.ascii_letters + string.digits + string.punctuation

    password = ''.join(secrets.choice(chars) for _ in range(length))

    return password
