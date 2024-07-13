import { initializeOtel } from "@/lib/telemetry/nodejs"
import { generate } from "../llm"
import { config } from "./config"

const cleanup = initializeOtel("generator-cli:ap-physics1")

const [summary] = await generate(undefined, config)
console.log(summary)

await cleanup()
process.exit(0)
