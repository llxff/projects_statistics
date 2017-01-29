defmodule ProjectsStatistics.Router do
  use ProjectsStatistics.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ProjectsStatistics do
    pipe_through :api

    get "/projects", ProjectsController, :index

    get "/projects/:id/versions", VersionsController, :index
    post "/projects/:id/versions", VersionsController, :create

    get "/data_types", DataTypesController, :index

    get "/versions/:id/data", DataController, :index
  end

  scope "/", ProjectsStatistics do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end
end
