defmodule ProjectsStatistics.Router do
  use ProjectsStatistics.Web, :router

  forward "/api", Absinthe.Plug, schema: ProjectsStatistics.Schema
  forward "/graphiql", Absinthe.Plug.GraphiQL, schema: ProjectsStatistics.Schema

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", ProjectsStatistics do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end
end
