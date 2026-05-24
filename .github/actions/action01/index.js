import * as core from '@actions/core';
import * as github from '@actions/github';

try {
    const fullname = core.getInput('fullname');
    const greeting = `Hello, ${fullname}!`;
    core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error.message);
}