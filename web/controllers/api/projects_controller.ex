defmodule ProjectsStatistics.ProjectsController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.Project

  def index(conn, _params) do
    conn
    |> put_status(:ok)
    |> render("index.json", projects: Repo.all(Project))
  end
end
