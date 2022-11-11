const { CommandClient } = require('eris')

// bot creation
async function init(token) {
    const SynthesisTwo = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the command
    SynthesisTwo.on('ready', async () => {
        await SynthesisTwo.bulkEditCommands([{
            name: 'love',
            description: 'Spread some love!',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${SynthesisTwo.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction creation event
    SynthesisTwo.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'love') {
            await interaction.createMessage({
                content: 'To everyone who gets this message: You are perfect as you are, keep trying, you are worth it. There is alway someone who will help and love you <3'
            })
        }
        else if (interaction?.data?.name === 'hey') {
            await interaction.createMessage({
                content: 'Hu? Yeah I´m online. By the way how are ya?'
            })
            
            #console.log('Self destructing...')
            #process.exit(0)
        }
    })
    SynthesisTwo.connect();
}

const tokenFromCommand = process.argv[2]
init(tokenFromCommand);
