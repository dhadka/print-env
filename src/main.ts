import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    for (const entry of Object.entries(process.env)) {
      core.info(`${entry[0]} = ${entry[1]}`)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
