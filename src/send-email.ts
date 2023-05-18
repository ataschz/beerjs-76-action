import { getInput } from "@actions/core";
import { createTransport } from "nodemailer";

export async function sendEmail(email: string) {
  const EMAIL_PASSWORD = getInput("EMAIL_PASSWORD");

  var transporter = createTransport({
    service: "gmail",
    auth: {
      user: "beerjs76@gmail.com",
      pass: EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: '"BeerJS 76" <beerjs76@gmail.com>',
    to: email,
    subject: "Gracias por asistir!! 🍻",
    text: "Gracias por asistir, ahora ve y compra nuestro SWAG en beerjscba.com/tienda 😈",
    html: "<b>Gracias por usar esta Github Action!</b>",
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("error sending email", err);
    } else {
      console.log("email sent successfully");
    }
  });
}
