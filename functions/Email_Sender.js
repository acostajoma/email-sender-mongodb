exports = async function() {
    const MailerSend = require("mailersend");
    const Recipient = MailerSend.Recipient;
    const EmailParams = MailerSend.EmailParams;
  
    const mongodb = context.services.get("mongodb-atlas");
    const databaseName =  context.environments.values.get('DATABASE_NAME');
    const db = mongodb.db("Development"); 
    const collection = db.collection("ContactData");
  
    const date = new Date();
    const startDate = new Date(date.getTime() - 3.2 * 60 * 60 * 1000);
  
    const query = { createdAt: { $gte: startDate } };
    const data = await collection.find(query).toArray();
  
    if (data.length === 0) {
      console.log('No new data, email not sent.');
      return;
    }
  
    const emailUser = context.environments.secrets.get('EMAIL_USER');
    const mailerSendApiKey = context.environments.secrets.get('MAILER_SEND_API_KEY');
  
    const mailersend = new MailerSend({
      api_key: mailerSendApiKey
    });
  
    const recipients = [new Recipient(emailUser, "Recipient")]; // Replace with recipient email
  
    const emailParams = new EmailParams()
      .setFrom(emailUser) // Use EMAIL_USER for the sender email
      .setFromName("Macosta") // Replace with your name
      .setRecipients(recipients)
      .setSubject("Database Report - New Entries")
      .setHtml(`<pre>${JSON.stringify(data, null, 2)}</pre>`)
      .setText(JSON.stringify(data, null, 2));
  
    try {
      await mailersend.send(emailParams);
      console.log('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  