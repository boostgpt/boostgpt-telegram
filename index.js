const { BoostGPT } = require("boostgpt")
const dotenv  = require('dotenv')
dotenv.config()
const TelegramBot = require('node-telegram-bot-api');

const client = new TelegramBot(process.env.TELEGRAM_BOT_API_TOKEN, { polling: true });

const boostgpt = new BoostGPT({
    key: process.env.BOOSTGPT_API_KEY,
    project_id: process.env.BOOSTGPT_PROJECT_ID
});


client.on('message', async (message) => {

    if (message.text && message.chat.id && !message.from.is_bot) {

        const chatId = message.chat.id;
        const messageText = message.text;

        client.sendChatAction(chatId, 'typing');

        if (messageText == '/start') {

            let welcome_message = `Hi ${message.from.first_name}! ${process.env.WELCOME_MESSAGE}`;

            client.sendMessage(chatId, welcome_message);

        }else{
     
            let payload = {
                bot_id: process.env.BOOSTGPT_BOT_ID,//The collection to chat
                openai_key: process.env.OPENAI_API_KEY,
                model: process.env.BOOSTGPT_BOT_MODEL, //The model to use for the chat response. Defaults to the bot model.
                message: messageText, //The chat message
                source_ids: process.env.BOOSTGPT_BOT_SOURCE_IDS, //The training source id's you want the AI's knowledge to be limited to.
                tags: process.env.BOOSTGPT_BOT_TAGS, //Use tags to get the segment of the training data you want the AI's knowledge to be limited to.
                top: process.env.BOOSTGPT_BOT_TOP, //Optional. The weight of training data used to form a context. Defaults to 10. Recommended settings between : 10 - 15 give better response from the AI.
                chat_id: 'telegram-'+chatId
            }

            let error_message = `Hi ${message.from.first_name}! ${process.env.ERROR_MESSAGE}`;

            let chatbot = await boostgpt.chat(payload);

            if (chatbot.err) {
               //Handle boostgpt errors here.
                client.sendMessage(chatId, error_message);

            }else{
                if (chatbot.response.chat) {
                    client.sendMessage(chatId, chatbot.response.chat.reply);
                }
            }
        }
    }

});

