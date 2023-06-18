const { Client, Intents, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu} = require('discord.js');

const bot = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
});

bot.config = require('./config');
bot.commands = new Collection();


require('./src/Structure//Handler/Event')(bot);
require('./src/Structure//Handler/Command')(bot);
bot.on('interactionCreate', async (interaction) => {

  
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const colors = require(`colors`) 
const { Modal, TextInputComponent, SelectMenuComponent, showModal } = require('discord-modals'); // Import all

//const { Modal, TextInputComponent, showModal } = discordModals;


    
const profil = await db.get(`profil_${interaction.guild.id}_${interaction.user.id}`) 
const name = await db.get(`name_${interaction.guild.id}_${interaction.user.id}`)
  
    
    
if(interaction.customId === "select") {
            if (interaction.values[0] == "select1") {
await db.set(`intention_${interaction.guild.id}_${interaction.user.id}`, "🍒 Trouver son ame-sœur.").then(interaction.reply({ content: "Vous venez de selectionné \`🍒 Trouver son ame-sœur \`!", ephemeral: true})).then(
console.log(`Systeme »`.green + ` ${interaction.user.username} vient de selectionné un fruit !` + ` (Cerise)`.red))
      
            }
  if (interaction.values[0] == "select2") {
await db.set(`intention_${interaction.guild.id}_${interaction.user.id}`, "🍇 Simple recherche(s) amicale .").then(interaction.reply({ content: "Vous venez de selectionné \`🍇 Simple recherche(s) amicale. \`!", ephemeral: true})).then(
console.log(`Systeme »`.green + ` ${interaction.user.username} vient de selectionné un fruit !` + ` (Raisin)`.blue))
      
            }
  if (interaction.values[0] == "select3") {
await db.set(`intention_${interaction.guild.id}_${interaction.user.id}`, "🍉 Discuter et apprendre a  .").then(interaction.reply({ content: "Vous venez de selectionné \`🍉 Simple recherche(s) amicale. \`!", ephemeral: true})).then(
console.log(`Systeme »`.green + ` ${interaction.user.username} vient de selectionné un fruit !` + ` (Pastèque)`.yellow))
      
            }
  if (interaction.values[0] == "select4") {
await db.set(`intention_${interaction.guild.id}_${interaction.user.id}`, "🍑 Coup d'un soir.").then(interaction.reply({ content: "Vous venez de selectionné \`🍑 Coup d'un soir. \`!", ephemeral: true})).then(
console.log(`Systeme »`.green + ` ${interaction.user.username} vient de selectionné un fruit !` + ` (Pêche)`.bold))
      
            }
        }

  
if (interaction.isButton() ){

  
  const { customId } = interaction
const inc = "Inconnu"
  if(customId === `info`) {
    const compte = new MessageEmbed()

.setTitle(`Bienvenue,  ${interaction.user.username}`)
.setDescription(`Bonjour à tous,

Comme vous avez pu le constater, à partir d'aujourd'hui le serveur est doté d'un **bot révolutionnaire et inédit de rencontre** <@1105101078569177168> . Il sera sujet à beaucoup de mises à jour et ajouts de fonctionnalités pour améliorer votre expérience utilisateur. L'âge minimal d'utilisation du bot est de **18 ans**, il faut donc **être majeur**.

Son utilisation peut néanmoins paraître compliquée. C'est pourquoi je vais essayer de vous détailler les étapes à suivre pour ne pas vous tromper.

> **1)** Vous devez créer votre profil dans <#1106000981872881674>   (obligé pour envoyer une demande). Suivez simplement les instructions - vous ne pourrez pas changer votre prénom et sexe, donc ne vous trompez pas et ne mettez pas d’espace dans votre prénom -. Si un soucis : <@1091667084993384469> 

> **2)** Une fois le profil créé, il faudra le compléter, l'intention et la photo sont obligatoires, mais la biographie ne l'est pas. Choisissez-bien ! Vous avez 10 minutes maximum pour envoyer votre photo.

>  **3)** Il vous est maintenant proposé d'envoyer votre profil ou non. Si vous ne souhaitez pas l'envoyer, vous n'êtes pas obligé, mais c'est mieux pour vous mettre en avant. Vous pourrez toujours envoyer plus tard votre profil si vous le voulez.

>  **4)** Vous pouvez maintenant demander à parler aux personnes qui vous intéressent. Une fois que cela est fait et que la personne accepte la demande, vous avez un jour pour parler. Il y a également un bouton pour clôturer la conversation en avance ! Ne cliquez dessus que si vous voulez fermer la conversation, faites attention. Amusez-vous !

❌  **VOUS DEVEZ OUVRIR VOS MP POUR QUE LE BOT PUISSE VOUS ENVOYER DES MESSAGES ET QUE VOUS ACCEPTIEZ LES DEMANDES** ❌`)
    interaction.reply({ embeds: [compte], ephemeral: true})
  }
  if(customId === `send`) {
if(name == inc) {
  interaction.reply({ content: "Votre profil n'est pas completé ! ( Information manquante: \`Prénom\` ) ", ephemeral: true})
} else {
if(profil == null) {
  interaction.reply({ content: " :x: Votre profil n'existe pas. ", ephemeral: true})
    } else {
  if(await db.get(`sexe_${interaction.guild.id}_${interaction.user.id}`) == inc) {
  interaction.reply({ content: "Votre profil n'est pas completé ! ( Information manquante: \`Sexe\` ) ", ephemeral: true})
}
    else {
  const intention = await db.get(`intention_${interaction.guild.id}_${interaction.user.id}`)
      const age = await db.get(`age_${interaction.guild.id}_${interaction.user.id}`)
const biographie = await db.get(`bio_${interaction.guild.id}_${interaction.user.id}`)
const sex = await db.get(`sexe_${interaction.guild.id}_${interaction.user.id}`)
  const 
preno = await db.get(`name_${interaction.guild.id}_${interaction.user.id}`)
      if(sex === "🧔‍♂️ Homme") {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('request')
					.setLabel('Demandé ' + interaction.user.username)
					.setStyle('PRIMARY')
)
  
  const compte = new MessageEmbed()

.setTitle(`Profil de ${interaction.user.username}`)
.setDescription(`
> <:name:1106143376165847080> \` Prénom\`:${preno}
> <:Age:1106143544990769173> \`Âge\`: ${age}
> <:sexe:1106143603220283463> \`: Sexe\`: ${sex}
> <:orientation:1106143721617117196>  \` Orientation \`: ${await db.get(`ori_${interaction.guild.id}_${interaction.user.id}`)}
> <:intention:1106143773542600735> \`  Intentions \`: ${intention}

__**Biographie**__\n\`${await                   db.get(`bio_${interaction.guild.id}_${interaction.user.id}`)}\`
`)
.setColor("Ff0000")
bot.channels.cache.get(await db.get(`hommesalon_${interaction.guild.id}`)).send({ embeds: [compte], components: [row]})

  }
            if(sex === "👸 Femme") {
  const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('request')
					.setLabel('Demandé ' + interaction.user.username)
					.setStyle('PRIMARY')
)
  
  const compte = new MessageEmbed()

.setTitle(`Profil de ${interaction.user.username}`)
.setDescription(`
> <:name:1106143376165847080> \` Prénom\`:${preno}
> <:Age:1106143544990769173> \`Âge\`: ${age}
> <:sexe:1106143603220283463> \`: Sexe\`: ${sex}
> <:orientation:1106143721617117196>  \` Orientation \`: ${await db.get(`ori_${interaction.guild.id}_${interaction.user.id}`)}
> <:intention:1106143773542600735> \`  Intentions \`: ${intention}

__**Biographie**__\n\`${await                   db.get(`bio_${interaction.guild.id}_${interaction.user.id}`)}\`
`)
.setColor("Ff0000")
bot.channels.cache.get(await db.get(`femmesalon_${interaction.guild.id}`)).send({ embeds: [compte], components: [row]})

  }
      const embed = new MessageEmbed()
      .setDescription("Ton profil a été envoyé ! ")
      .setColor("ffffff")
      interaction.reply({ embeds: [embed], ephemeral: true})
    }
  }
  }}  
  
    
    
    if(customId === `request`) {
 console.log(interaction.user.username)
      const embed = new MessageEmbed()
      .setDescription(":x: Ce n'esy pas encore possible de match un utilisateur avec un bouton..... 🥲</love:0>")
      .setColor("ffffff")
      interaction.reply({ embeds: [embed], ephemeral: true})
    }

    
  

  if(customId === `profil`) {
    
    if(profil == null) {
await db.set(`profil_${interaction.guild.id}_${interaction.user.id}`, true).then(interaction.reply({ content: "Votre profil d’amis a bien été créer !", ephemeral: true}))
      await db.set(`age_${interaction.guild.id}_${interaction.user.id}`, inc)
await db.set(`bio_${interaction.guild.id}_${interaction.user.id}`, inc)
 await db.set(`ori_${interaction.guild.id}_${interaction.user.id}`, inc)
await db.set(`sexe_${interaction.guild.id}_${interaction.user.id}`, inc)
await db.set(`intention_${interaction.guild.id}_${interaction.user.id}`, inc)
await db.set(`name_${interaction.guild.id}_${interaction.user.id}`, inc).then(
  console.log(`Systeme »`.green + ` ${interaction.user.username} vient de créer un profil !`))
      


  } else {
    if(profil === true) {


const intention = await db.get(`intention_${interaction.guild.id}_${interaction.user.id}`)
      const age = await db.get(`age_${interaction.guild.id}_${interaction.user.id}`)
const biographie = await db.get(`bio_${interaction.guild.id}_${interaction.user.id}`)
const sex = await db.get(`sexe_${interaction.guild.id}_${interaction.user.id}`)
  const 
preno = await db.get(`name_${interaction.guild.id}_${interaction.user.id}`)
      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('edit')
					.setLabel('Modifier votre profil')
					.setStyle('PRIMARY')
)
        			.addComponents(
				new MessageButton()
					.setCustomId('int')
					.setLabel('Modifier vos intention')
					.setStyle('PRIMARY')
)
			.addComponents(
				new MessageButton()
					.setCustomId('delete')
					.setLabel('Supprimer votre profil')
					.setStyle('DANGER')
)
      const compte = new MessageEmbed()

.setTitle(`${interaction.user.username}, Bienvenue sur votre profil`)
.setDescription(`
> <:name:1106143376165847080> \` Prénom\`:${preno}
> <:Age:1106143544990769173> \`Âge\`: ${age}
> <:sexe:1106143603220283463> \`: Sexe\`: ${sex}
> <:orientation:1106143721617117196>  \` Orientation \`: ${await db.get(`ori_${interaction.guild.id}_${interaction.user.id}`)}
> <:intention:1106143773542600735> \`  Intentions \`: ${intention}

__**Biographie**__\n\`${await                   db.get(`bio_${interaction.guild.id}_${interaction.user.id}`)}\`
`)
        .setFooter(`${interaction.user.tag} » Profil D’amis `)
      .setColor("ffffff")
        interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
    }

    

  }
    }




if (customId === "int") {

  const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Sélectionne ton intention.')
					.addOptions([
						{
							label: '» Cerises',
							description: 'Trouver son âme-sœurs. ',
							value: 'select1',
              emoji: {
              name: "🍒",
              }
						},
            						{
							label: '» Raisin',
							description: 'Simple recherche(s) amical. ',
							value: 'select2',
              emoji: {
              name: "🍇",
              }
						},
            						{
							label: '» Pasteque',
							description: 'Discuter et apprendre à ce connaître ',
							value: 'select3',
              emoji: {
              name: "🍉",
              }
						},
            
            						{
							label: '» Pêche',
							description: 'Coup d\'un soir. ',
							value: 'select4',
              emoji: {
              name: "🍑",
              }
						}
					]),
			);
  const compte = new MessageEmbed()
        .setDescription(`Choisis ton intention.`)
      .setColor("ffffff")

    interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
}




    if (customId === 'editname') {
            const modal = new Modal()
        .setCustomId('modal')
        .setTitle('Modifie ton profil ! ')
        .addComponents([
          new TextInputComponent()
            .setCustomId('name')
            .setLabel('*')
            .setStyle('SHORT')
            .setMaxLength(22)
            .setPlaceholder('Prénom')
            .setRequired(true),
        ],
                       [
          new TextInputComponent()
            .setCustomId('age')
            .setLabel('*')
            .setStyle('SHORT')
            .setMaxLength(22)
            .setPlaceholder('Age')
            .setRequired(true),
        ]
                    ,
                       [
          new TextInputComponent()
            .setCustomId('bio')
            .setLabel('*')
            .setStyle('PARAGRAPH')
            .setPlaceholder('Biographie')
            .setRequired(false),
        ]
                           
                      );


      
      interaction.showModal(modal, {
        bot,
        interaction,
      });
      try {
        const submitted = await interaction.awaitModalSubmit({
  time: 60000,
  filter: i => i.user.id === interaction.user.id,
}).catch(error => {

          
  console.error(error)
  return null
})

        const pr = submitted.fields.getTextInputValue("name")
        const ag = submitted.fields.getTextInputValue("age")
  const bo = submitted.fields.getTextInputValue("bio")
        
        console.log(pr)
        submitted.reply({ content:`Systeme » Votre profil a bien été actualisé. `, ephemeral:true })
        await db.set(`name_${interaction.guild.id}_${interaction.user.id}`, pr)
await db.set(`age_${interaction.guild.id}_${interaction.user.id}`, ag)
await db.set(`bio_${interaction.guild.id}_${interaction.user.id}`, bo)
      } catch (err) {
        return
      }
    }
    
    if(customId === "editsexe") {
      const row = new MessageActionRow()

  .addComponents(
				new MessageButton()
					.setCustomId('hommesexe')
					.setLabel('Homme')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('femmesexe')
					.setLabel('Femme')
					.setStyle('PRIMARY')
)
      const compte = new MessageEmbed()
      .setTitle(`Modifie ton sexe.`)
        .setDescription(`Veuillez sélectionner quel type de sexe, que vous souhaitez modifier/Ajouté.`)
      .setColor("ffffff")

            interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
      
    }
    if(customId === "edit") {
    
    const row = new MessageActionRow()

  .addComponents(
				new MessageButton()
					.setCustomId('editname')
					.setLabel('Prénom / Âge')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('editori')
					.setLabel('Orientation Sexuel')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('editsexe')
					.setLabel('Sexe')
					.setStyle('PRIMARY')
)
    const compte = new MessageEmbed()
      .setTitle(`Modifie ton profil.`)
        .setDescription(`Veuillez sélectionner quel type de votre profil vous souhaitez modifier.`)
      .setColor("ffffff")

            interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
      
    }

  
if (customId === 'hommesexe') {
      db.set(`sexe_${interaction.guild.id}_${interaction.user.id}`, "🧔‍♂️ Homme").then(interaction.reply({ content: `Vous étes actuellement un \`Homme\`🧔‍♂️`, ephemeral: true}))
    }
  if (customId === 'femmesexe') {
      db.set(`sexe_${interaction.guild.id}_${interaction.user.id}`, "👸 Femme").then(interaction.reply({ content: `Vous étes actuellement une \`Femme\`👸`, ephemeral: true}))
    }
  if (customId === 'hetero') {
      db.set(`ori_${interaction.guild.id}_${interaction.user.id}`, "Heterosexuel").then(interaction.reply({ content: `Vous étes actuellement  \`HeteroSexuel\``, ephemeral: true}))
    }
  if (customId === 'bi') {
      db.set(`ori_${interaction.guild.id}_${interaction.user.id}`, "Bisexuel").then(interaction.reply({ content: `Vous étes actuellement  \`Bisexuel\``, ephemeral: true}))
    }
if (customId === 'homo') {
      db.set(`ori_${interaction.guild.id}_${interaction.user.id}`, "Homosexuel").then(interaction.reply({ content: `Vous étes actuellement  \`Homosexuel\``, ephemeral: true}))
    }
  if (customId === 'lesbi') {
      db.set(`ori_${interaction.guild.id}_${interaction.user.id}`, "Lesbienne").then(interaction.reply({ content: `Vous étes actuellement  \`Lesbienne\``, ephemeral: true}))
    }
if(customId === "editori") {
      const row = new MessageActionRow()

  .addComponents(
				new MessageButton()
					.setCustomId('hetero')
					.setLabel('Hétérosexuel')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('bi')
					.setLabel('Bisexuel')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('homo')
					.setLabel('Homosexuel')
					.setStyle('PRIMARY')
)
  .addComponents(
				new MessageButton()
					.setCustomId('lesbi')
					.setLabel('Lesbienne')
					.setStyle('PRIMARY')
)

      const compte = new MessageEmbed()
      .setTitle(`Modifie ton orientation sexuel.`)
        .setDescription(`Veuillez sélectionner quel type d'orientation, que vous souhaitez modifier/Ajouté.`)
      .setColor("ffffff")

            interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
      
    }
  if(customId === "delete") {
    
    const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('ouisupprime')
					.setLabel('OUI')
					.setStyle('DANGER')
)
  .addComponents(
				new MessageButton()
					.setCustomId('nonsupprime')
					.setLabel('NON')
					.setStyle('PRIMARY')
)
    const compte = new MessageEmbed()
        .setDescription(`Voulez vous vraiment supprimer votre profil ?`)
      .setColor("ffffff")

            interaction.reply({ embeds: [compte], components: [row], ephemeral: true})
      
    }
  if(customId === "ouisupprime") {
    db.delete(`profil_${interaction.guild.id}_${interaction.user.id}`)
db.delete(`name_${interaction.guild.id}_${interaction.user.id}`)
db.delete(`sexe_${interaction.guild.id}_${interaction.user.id}`)
db.delete(`intention_${interaction.guild.id}_${interaction.user.id}`)
db.delete(`ori_${interaction.guild.id}_${interaction.user.id}`)
db.delete(`bio_${interaction.guild.id}_${interaction.user.id}`)
        interaction.reply({ content: "Votre profil d’amis a bien été supprimer !", ephemeral: true}).then(
  console.log(`Systeme »`.red + `  ${interaction.user.username} vient de Supprimer son profil !`))
    //Votre profil d’amis n’a pas été supprimé ! 
  }
  if(customId === "nonsupprime") {
    
    
        interaction.reply({ content: "Votre profil d’amis n’a pas été supprimé !", ephemeral: true})
    
  }
  
}

})





bot.login(bot.config.clients.token);
