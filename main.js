const fs = require("fs")
const Discord = require("discord.js")
const { TOKEN, PREFIX } = require("./config")
const dayjs = require("dayjs")
const client = new Discord.Client()
client.commands = new Discord.Collection()

client.on("ready", () => {
  console.log(`${client.user.tag} est connecter!`)
})

client.on("message", (message) => {
  if (message.content === `${PREFIX} prefix`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Mon prefix")
        .setDescription(`Mon prefix est "${PREFIX}" .`)
    )
  else if (message.content === `${PREFIX} avatar`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Ton avatar")
        .setDescription(`${message.author.displayAvatarURL()}`)
    )
  else if (message.content === `${PREFIX} help`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Toute les commande")
        // Rajoute les commande dans cette partie si tu en as rajouter an bas de se code
        .setDescription(
          `Liste des commandes:\n \n !n prefix : pour avoir le prefix du bot \n \n !n avatar : pour afficher ton image de profil. \n \n 
          !n serverinfo : pour avoir toute les info concernant le serveur. \n \n !n botinfo : information sur le serveur. \n \n !n time : pour savoir l'heure \n \n !n invite : affiche
          un qr code pour inviter tes amies sur le serveur`
        )
    )
  else if (message.content === `${PREFIX} time`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Heure Française")
        .setDescription(
          `Voici l'heure : ${dayjs(message.createdTimestamp).format("HH:mm:ss")}`
        )
    )

  else if (message.content === `${PREFIX} servinfo`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Information sur le serveur")
        // Change l'emplacement de l'image pour que la commande fonctionne
        .attachFiles([
          `D:/Code/anonymous bot/8ba13e5a-1e35-4f89-a10e-aba664f8e50c-profile_image-70x70.png`,])
        .setImage(
          "attachment://8ba13e5a-1e35-4f89-a10e-aba664f8e50c-profile_image-70x70.png"
        )
        .setDescription(
          //Change l'identifiant pour mettre le créateur du serveur sur lequelle tu as invité mon bot
          `Nom : ${message.guild.name} \n Serveur créé par <@610980063655231501> \n Serveur communautaire de discute et d\'amusement !`
        )
    )

  else if (message.content === `${PREFIX} botinfo`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Information sur le bot")
        // Change si tu veux mais se serai sympa de laisser mon nom, façon de me soutenir !
        .setDescription(
          `Nom : ${client.user.tag} \n Créateur: °No€_dLcH °○°#9252 \n Date de création : 4 mai 2021`
        )
    )

  else if (message.content === `${PREFIX} invite`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Invite des gens dans le serveur")
        .setDescription(
          `Invite tes potes en leurs envoyant le qr code ci-dessous`
        )
        // Change l'emplacement de l'image pour que la commande fonctionne
        .attachFiles([`D:/Code/anonymous bot/Unitag_QRCode_1620507235996.png`])
        .setImage("attachment://Unitag_QRCode_1620507235996.png")
    )

    else if (message.content === `Nono's bot`)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("Information sur le bot")
        .setDescription(
          `Nom : ${client.user.tag} \n Créateur: °No€_dLcH °○°#9252 \n Date de création : 4 mai 2021 \n Prefix : !n`
        )
        // Change l'emplacement de l'image pour que la commande fonctionne
        .attachFiles([`D:/Code/anonymous bot/8ba13e5a-1e35-4f89-a10e-aba664f8e50c-profile_image-70x70.png`])
        .setImage("attachment://8ba13e5a-1e35-4f89-a10e-aba664f8e50c-profile_image-70x70.png")
    )
    
    else if (message.content === `${PREFIX} rip`) {
      const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
      message.channel.send(attachment);
      // Copie colle un lien trouver sur internet pour changer l'image et copie colle l'entièreté de la commande en changeant le lien et le nom de la commande pour avoir plus d'image
    }
  })
  
// Change ton token pour avoir les commande sur ton bot    
client.login("your token")