import { getInput } from "@actions/core";
import { getOctokit, context } from "@actions/github";

async function main() {
  const GITHUB_TOKEN = getInput("GITHUB_TOKEN");

  const octokit = getOctokit(GITHUB_TOKEN);

  const { pull_request } = context.payload;

  if (pull_request) {
    await octokit.rest.issues.createComment({
      ...context.repo,
      issue_number: pull_request?.number,
      body: "Hola, desde  la BeerJS 76!! ✨",
    });
  }
}

main();
