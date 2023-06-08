# BoostGPT Telegram

BoostGPT Telegram is a streamlined and user-friendly startup script that enables you to set up your own custom Telegram bot in a flash. With its cutting-edge artificial intelligence and powerful functionality, BoostGPT Telegram can help you automate tasks, improve workflow, and add an extra layer of fun and interactivity to your Telegram server.

BBBBB    OOOOO   OOOOO   SSSSS  TTTTTTTT  GGGGG   PPPPPP  TTTTTTTT
BB   B  OO   OO OO   OO SS         TT    GG   GG  PP   PP    TT    
BBBBB   OO   OO OO   OO  SSSSS     TT    GG       PPPPPP     TT    
BB   B  OO   OO OO   OO      SS    TT    GG   GGG PP         TT   
BBBBB    OOOO0   OOOO0   SSSSS     TT     GGGGGG  PP         TT    


<a href="https://discord.gg/FPTmDNjA"><img src="https://img.shields.io/discord/1100801013121822770?color=%bbccff&label=Discord" alt="Discord"></a>


## Features

- Can reply to direct messages

- Can engage in a conversation.


## Requirements

* Node v10 and above

* TELEGRAM_BOT_API_TOKEN:

You will need a Telegram bot API token for your bot.

    - Open the Telegram app and search for the "BotFather" bot.
    - Start a chat with BotFather by clicking on it and then clicking the "Start" button.
    - Send the /newbot command to BotFather to create a new bot.
    - Follow the instructions provided by BotFather. You'll need to provide a name for your bot (e.g., "MyAwesomeBot") and a username (e.g., "@myawesomebot").
    - Once you've completed the setup, BotFather will provide you with an API token. The API token will look something like this: 1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi.
    - Copy the API token and keep it secure. It will be used in your Node.js script to authenticate your bot and interact with the Telegram Bot API.

That's it! You now have your Telegram bot API token. Make sure to replace 'TELEGRAM_BOT_API_TOKEN' in the code with the actual API token you obtained from BotFather.


* OPENAI_API_KEY:

You need to have an OpenAI account and API key.
Go to the [OpenAI developer portal](https://platform.openai.com/), create an account, and generate an API key.

* BOOSTGPT_API_KEY:

You need to have a BoostGPT account and API key.
Go to the [BoostGPT site](https://boostgpt.co), create an account, and generate an API key.

* BOOSTGPT_PROJECT_ID:

You need to create a project on BoostGPT to use its API.
After creating a project, you can get its project ID from the dashboard.

* BOOSTGPT_BOT_ID:

You will need to have created a BoostGPT bot and have its ID.
To get your bot's ID, go to your bot's settings page on the BoostGPT dashboard and copy the bot ID.


## Installation

`git clone git@github.com:boostgpt/boostgpt-telegram.git`

Run `npm install`

## Configuration

To create a .env file with the above requirements, you can follow these steps:

1. Rename the file .env.exclude to .env.

2. Open the .env file in a text editor.

3. Edit the following lines in the file, replacing the placeholders with the actual tokens and IDs:

```
    TELEGRAM_BOT_API_TOKEN=your_telegram_bot_api_token_here
    OPENAI_API_KEY=your_openai_api_key_here
    BOOSTGPT_API_KEY=your_boostgpt_api_key_here
    BOOSTGPT_PROJECT_ID=your_boostgpt_project_id_here
    BOOSTGPT_BOT_ID=your_boostgpt_bot_id_here
```

4. Save the file

Make sure to keep the .env file secure and not share it publicly, as it contains sensitive information that could be used to access your bots and APIs.


### Start your bot

Run `node index.js` to start your bot. 

We recommend using the pm2 process manager to start your bot in production mode. 

To do this you have to:

- Install pm2 globally using the command `npm install -g pm2`.

- Navigate to the directory where your index.js file is located.

- Start your bot by running the command `pm2 start index.js --name my-bot` where my-bot is the name of your bot.

- Pm2 will automatically detect the Node.js runtime and launch the application in cluster mode.

- Verify that your bot is running by checking its status with the command `pm2 status`.

- If you need to stop the bot, you can run the command `pm2 stop my-bot`.

- If you need to restart the bot, you can run the command `pm2 restart my-bot`.

Using pm2 provides a number of benefits, including process management, automatic restarts in case of crashes, and monitoring capabilities.


## Questions?

[Join our Discord server.](https://discord.gg/KGhz5SnyXM)


### License

This package is licensed under the [MIT](https://github.com/boostgpt/boostgpt-telegram/blob/master/LICENSE).
