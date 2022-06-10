const discord = require("discord.js");
const keep_alive = require('./keep_alive.js')

const config = require("./config.json");
const utils = require("./utils/util.js");

const mongoose = require('mongoose');

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd())
module.exports = { client, config };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

util.loadModules("events");
util.loadModules("commands", true)

client.login("OTU1MDk0NzY3NDE3NTg1Njg0.YjcrUQ.qduQnLfR453WJ_7g7wIOIImKXDA");

// mongoose

    const { mongooseConnectionString } = require('../config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));


