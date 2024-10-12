# pip install mailslurp-client
import mailslurp_client
from smtplib import SMTP_SSL
from dotenv import load_dotenv
import os

def send_email(subject, body, to_address):
    load_dotenv()

    # create a mailslurp configuration
    configuration = mailslurp_client.Configuration()
    configuration.api_key['x-api-key'] = os.getenv('SLURP_API_KEY')
    
    with mailslurp_client.ApiClient(configuration) as api_client:
        # create an inbox
        inbox_controller = mailslurp_client.InboxControllerApi(api_client)
        inbox = inbox_controller.create_inbox()
        
        access_details = inbox_controller.get_imap_smtp_access(inbox_id=inbox.id)

        try:
            with SMTP_SSL(host=access_details.secure_smtp_server_host, port=access_details.secure_smtp_server_port) as smtp:
                msg = f"Subject: {subject}\r\n\r\n{body}"
                smtp.login(user=access_details.secure_smtp_username, password=access_details.secure_smtp_password)
                smtp.sendmail(msg=msg, from_addr=inbox.email_address, to_addrs=[to_address])
                smtp.quit()
            print("Email sent successfully")
            return True
        except Exception as e:
            print(f"Error sending email: {str(e)}")
            return False