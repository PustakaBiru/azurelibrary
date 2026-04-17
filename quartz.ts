import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  mapFn: (node) => {
    node.displayName = node.displayName.toUpperCase()
    return node
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()