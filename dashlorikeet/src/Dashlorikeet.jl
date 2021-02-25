
module Dashlorikeet
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("dashlorikeet.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dashlorikeet",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dashlorikeet.min.js",
    external_url = "https://unpkg.com/dashlorikeet@0.0.1/dashlorikeet/dashlorikeet.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dashlorikeet.min.js.map",
    external_url = "https://unpkg.com/dashlorikeet@0.0.1/dashlorikeet/dashlorikeet.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
