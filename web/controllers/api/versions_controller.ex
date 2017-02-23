defmodule ProjectsStatistics.VersionsController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.VersionRepo

  def create(conn, %{"id" => project_id, "name" => name}) do
    case VersionRepo.create(project_id, name) do
      {:ok, version} ->
        conn
        |> put_status(:ok)
        |> render("show.json", version: version)
      {:error, _version} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json")
    end
  end
end
