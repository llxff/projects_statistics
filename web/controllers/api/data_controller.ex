defmodule ProjectsStatistics.DataController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.DataRepo

  def index(conn, params) do
    conn
    |> put_status(:ok)
    |> render("index.json", data: DataRepo.of_version(params["id"]))
  end
end
