module.exports = class MessageEvent {
    constructor(){
        super('message');
    }

    async run(client, message) {
        if (message.author.bot) return;
    }
}