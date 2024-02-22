import { Client, LocalAuth } from 'whatsapp-web.js';

export const newWhatsappClient  = () => {

  return  new Client({
    authStrategy: new LocalAuth(),
  
  })
}

export const authenticatedWhatsappClient = (client) => {

  return client.on("authenticated", (session) => {
    console.log(session);
  }) 
}

export const generateQrCod = (client) => {

  return client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true })
  })
}

export const readyWhatsappClient = (client) => {

  return client.on("ready", () => {
    console.log("Client is ready!")    
  })
} 


export const readingMessageWhatsappClient = (client) => {
  
  return client.on("message", (message) => {
  
  console.log(message)
  })

}

export const initializeWhatsappClient = (client) => {

  return client.initialize()
}
