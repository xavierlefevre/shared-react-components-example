[ignore]

[include]

[libs]
src/flow
../../tools-configuration/global-flow
./node_modules/@shared-components/atoms/flow-typed/UtilsTypes
./node_modules/@shared-components/atoms/flow-typed/PropsTypes
./node_modules/@shared-components/atoms/flow-typed/PackageType.js

[options]
module.name_mapper='shared-components-<%= name %>' -> '<PROJECT_ROOT>/src'
include_warnings=true
emoji=true

[version]
^0.74.0
