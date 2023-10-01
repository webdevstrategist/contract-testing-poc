import path from 'path'
import { Verifier, LogLevel } from '@pact-foundation/pact'
import { describe, it } from 'vitest'

describe("Pact Verification", () => {
    it("validates the expectations of ProductService", () => {
        const opts = {
            logLevel: "info",
            providerBaseUrl: "<AWS_URL>",
            provider: "ProductService",
            providerVersion: "1.0.0",
            pactUrls: [
                path.resolve(__dirname, '../../ui/pacts/productsUI-productsService.json')
            ]
        };

        //@ts-ignore
        return new Verifier(opts).verifyProvider().then(output => {
            console.log(output);
        })
    })
});