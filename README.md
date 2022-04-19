# Flex

## CRM Container

This is a sample Flex CRM Integration. It pulls contact data from an Airtable database routed through Twilio Functions.

This 

```js
// /src/samplePlugin.js

// CRMContainer -> twilio-functions-airtable-crm
flex.CRMContainer.defaultProps.uriCallback = (task) => {
  return task
    ? `https://twilio-functions-airtable-crm-9306-dev.twil.io/view.html?table=contacts&field=phone&value=${task.attributes.name}`
    : "https://twilio-functions-airtable-crm-9306-dev.twil.io/index.html"
}
```

The `task.attributes.name` property is the phone number that is passed to Airtable to look up the contact by phone number.

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