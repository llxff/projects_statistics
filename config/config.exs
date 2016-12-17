# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :projects_statistics,
  ecto_repos: [ProjectsStatistics.Repo]

# Configures the endpoint
config :projects_statistics, ProjectsStatistics.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "to/tTM0bpvnBQowVaFK9HpEVDIB+4Awwp8dHr8NMOAv9LWCRS5osAAt94rodSrx9",
  render_errors: [view: ProjectsStatistics.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ProjectsStatistics.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
