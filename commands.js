import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
  const choices = getRPSChoices();
  const commandChoices = [];

  for (let choice of choices) {
    commandChoices.push({
      name: capitalize(choice),
      value: choice.toLowerCase(),
    });
  }

  return commandChoices;
}

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

const NOW = {
  name: 'now',
  description: 'Gives the current time as a timestamp',
  type: 1
}

const TIMESTAMP = {
  name: 'timestamp',
  description: 'Send a date, get the timestamp',
  type: 1,
  options: [{
    type: 3,
    name: 'date',
    description: "The date you'd like to convert to a timestamp",
    required: true
  }, {
    type: 4,
    name: 'timezone',
    description: "Which timezone to apply",
    choices: [{
      name: "UK",
      value: "0"
    }, {
      name: "Central Europe",
      value: "1"
    }, {
      name: "Turkey",
      value: "2"
    }]
  }]
}

const ALL_COMMANDS = [TEST_COMMAND, NOW, TIMESTAMP];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
