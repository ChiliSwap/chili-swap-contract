require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-dependency-compiler");
require("@nomicfoundation/hardhat-verify");


module.exports = {
    defaultNetwork:     "hardhat",
    networks:           {
        hardhat:    {
            mining: {
                auto:    true,
                mempool: {
                    order: "fifo",
                },
            },
        },
        scroll:    {
            url:           "https://rpc.scroll.io/",
            chainId:       534352,
        },
    },
    solidity:           {
        compilers: [
            {
                version:  "0.4.19",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    200,
                    },
                },
            },
            {
                version:  "0.5.16",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    999999,
                    },
                },
            },
            {
                version:  "0.6.6",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    999999,
                    },
                },
            },
            {
                version:  "0.6.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    200,
                    },
                },
            },
            {
                version:  "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    200,
                    },
                },
            },
            {
                version:  "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    200,
                    },
                },
            },
            {
                version:  "0.8.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs:    10000000,
                    },
                },
            },
        ],
    },
    paths:              {
        sources:   "./contracts",
        tests:     "./test",
        cache:     "./cache",
        artifacts: "./artifacts",
    },
    mocha:              {
        reporter:        "mochawesome",
        timeout:         60 * 1000,
        slow:            10 * 1000,
        bail:            true,
        recursive:       true,
        diff:            true,
        reporterOptions: {
            overwrite:       true,
            inline:          true,
            cdn:             true,
            charts:          true,
            autoOpen:        true,
            showSkipped:     true,
            json:            false,
            reportDir:       "docs",
            reportTitle:     "chili-swap-oracle",
            reportFilename:  "chili-swap-oracle",
            reportPageTitle: "chili-swap-oracle",
        },
    },
    gasReporter:        {
        enabled: false,
    },
    dependencyCompiler: {
        paths: [],
    },
    etherscan: {
        apiKey: {
            scroll: '@apiKey',
        },
        customChains: [
            {
                network: 'scroll',
                chainId: 534352,
                urls: {
                    apiURL: 'https://api.scrollscan.com/api',
                    browserURL: 'https://api.scrollscan.com',
                },
            },
        ],
    },
};