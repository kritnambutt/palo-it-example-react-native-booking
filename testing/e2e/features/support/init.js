import detox from 'detox'​
import { Before, BeforeAll, AfterAll, After } from '@cucumber/cucumber'​
import config from '../../../.detoxrc.json'​
import adapter from './adapter'​
​
BeforeAll(async () => {​
  await detox.init(config)​
  await detox.device.launchApp({newInstance: true})​
})​
​
Before(async (context) => {​
  await detox.device.reloadReactNative()​
  await adapter.beforeEach(context)​
})​
​
After(async (context) => {​
  await adapter.afterEach(context)​
})​
​
AfterAll(async () => {​
  await detox.cleanup()​
})​
​