import { warn } from "danger"

// Rule n°1:
// If a developer has to modify a flow file in 'flow-typed/PackageTypes'
// there is chance he is making a breaking change
const modifiedExportedFlowFiles = danger.git.modified_files
    .filter(x => x.includes('flow-typed/PackageTypes'))
    .join(`
- `)
if (modifiedExportedFlowFiles) {
    warn(`## Breaking changes risk:

You changed the exported flow types, be careful because this might indicate a breaking change.
Find [here how to anticipate breaking changes on Shared Components](https://github.com/shared-components/shared-components/blob/master/documentation/technical-standards/reusable-packages.md#breaking-changes).
The list of exported Flow files you changed:

- ${modifiedExportedFlowFiles}`)
}
