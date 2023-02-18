import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!')
	;

const execute = async (interaction) => {
	await interaction.reply('Pong!');
};


export { command, execute };