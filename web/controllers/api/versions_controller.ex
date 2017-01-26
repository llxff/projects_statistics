defmodule ProjectsStatistics.VersionsController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.VersionRepo

  def index(conn, params) do
    conn
    |> put_status(:ok)
    |> render("index.json", versions: VersionRepo.of_project(params["id"]))
  end
end
