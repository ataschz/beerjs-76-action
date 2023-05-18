import { getInput } from "@actions/core";
import { getOctokit, context } from "@actions/github";

async function main() {
  const BEERJS_TOKEN = getInput("BEERJS_TOKEN");

  const octokit = getOctokit(BEERJS_TOKEN);

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
