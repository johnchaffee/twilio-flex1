# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Development

Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

## How to run it

```text
   ┌────────────────────────────────────────────────────────────────────┐
   │                                                                    │
   │   Your Twilio Flex Plugin project has been successfully created!   │
   │                                                                    │
   │                                                                    │
   │   Development:                                                     │
   │   $ cd ~/dev/twilio-flex/                                          │
   │   $ twilio flex:plugins:start                                      │
   │                                                                    │
   │   Build Command:                                                   │
   │   $ cd ~/dev/twilio-flex/                                          │
   │   $ twilio flex:plugins:build                                      │
   │                                                                    │
   │   Deploy Command:                                                  │
   │   $ cd ~/dev/twilio-flex/                                          │
   │   $ twilio flex:plugins:deploy                                     │
   │                                                                    │
   │   For more info check the README.md file or go to:                 │
   │   ➡ https://www.twilio.com/docs/flex                               │
   │                                                                    │
   └────────────────────────────────────────────────────────────────────┘
```