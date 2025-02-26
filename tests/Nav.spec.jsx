import { Router } from "@solidjs/router";
import { describe, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Nav from "../src/Nav";

describe("Nav", () => {
    test.each(["testnet", "regtest", "random"])(
        "should show network on network %s",
        async (network) => {
            render(() => (
                <Router>
                    <Nav network={network} />
                </Router>
            ));

            const networkLabel = screen.queryAllByText(network);
            expect(networkLabel.length).toBe(1);
        },
    );

    test("should not show network on mainnet", async () => {
        const network = "main";

        render(() => (
            <Router>
                <Nav network={network} />
            </Router>
        ));

        const networkLabel = screen.queryAllByText(network);
        expect(networkLabel.length).toBe(0);
    });
});
