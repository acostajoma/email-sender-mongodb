exports = async function () {
  const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

  const mongodb = context.services.get("mongodb-atlas");

  // Acceder a los valores correctamente
  const databaseName = context.environment.values["databaseName"];
  const db = mongodb.db(databaseName);
  const collection = db.collection("ContactData");

  const date = new Date();
  const startDate = new Date(date.getTime() - 3.2 * 60 * 60 * 1000);

  const query = { createdAt: { $gte: startDate } };
  const data = await collection.find(query).toArray();

  if (data.length === 0) {
    console.log("No new data, email not sent.");
    return;
  }

  // Acceder a los secretos correctamente
  const emailUser = context.values.get("emailUser");
  const mailerSendApiKey = context.values.get("mailerSendApiKey");

  const mailersend = new MailerSend({
    api_key: mailerSendApiKey,
  });

  const sentFrom = new Sender(emailUser, "Rids.agency");
  const recipients = [new Recipient(emailUser, "Jose")]; // Replace with recipient email

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Database Report - New Entries")
    .setHtml(`<pre>${JSON.stringify(data, null, 2)}</pre>`)
    .setText(JSON.stringify(data, null, 2));

  try {
    await mailersend.email.send(emailParams);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
