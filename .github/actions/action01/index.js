const core = require('@actions/core');
const github = require('@actions/github');

try {
    const fullname = core.getInput('fullname');
    const greeting = `Hello, ${fullname}!`;
    core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error.message);
}