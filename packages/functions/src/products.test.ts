import path from 'path'
import { Verifier, LogLevel } from '@pact-foundation/pact'
import { describe, it } from 'vitest'

describe("Pact Verification", () => {
    it("validates the expectations of ProductService", () => {
        const opts = {
            logLevel: "info",
            providerBaseUrl: "",
            provider: "productsService",
            providerVersion: "1.0.0",
            // consumerVersionSelectors:[{
            //     "branch":"master"
            // }],
            // pactBrokerUrl: process.env.PACT_BROKER_URL || "http://localhost:8000",
            // pactBrokerUsername: process.env.PACT_BROKER_USERNAME || "pact_workshop",
            // pactBrokerPassword: process.env.PACT_BROKER_PASSWORD || "pact_workshop",
            pactUrls: [
                path.resolve(__dirname, '../../ui/pacts/productsUI-productsService.json')
            ]
            //publishVerificationResult: true
        };

        //@ts-ignore
        return new Verifier(opts).verifyProvider().then(output => {
            console.log(output);
        })
    })
});