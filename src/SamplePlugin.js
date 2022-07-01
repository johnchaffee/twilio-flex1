import React from "react"
import { VERSION } from "@twilio/flex-ui"
import { FlexPlugin } from "@twilio/flex-plugin"

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container"
import reducers, { namespace } from "./states"

const PLUGIN_NAME = "SamplePlugin"

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME)
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager)
    console.log("ASYNC INIT")

    const options = { sortOrder: -1 }
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskListContainer key="SamplePlugin-component" />,
      options
    )

    // CRMContainer -> twilio-functions-airtable-crm
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      let phoneNumber = "+12063996576"
      console.log("LET PHONE NUMBER:", phoneNumber)
      /**
       * If the channelType is web, there will not be a phone number in the name attribute
       * so use the default phoneNumber. Otherwise, the sms and voice channel types will include
       * a phone number in the name attribute, so use it for the phone value
       */
      if (task && task.attributes.channelType != "web") {
        console.log("TASK:", task)
        phoneNumber = task.attributes.name
        console.log("PHONE NUMBER:", phoneNumber)
      }
      return task
        ? `https://twilio-functions-airtable-crm-8659-dev.twil.io/view.html?table=contacts&field=phone&value=${phoneNumber}`
        : "https://twilio-functions-airtable-crm-8659-dev.twil.io/index.html"
    }
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
      )
      return
    }

    manager.store.addReducer(namespace, reducers)
  }
}
