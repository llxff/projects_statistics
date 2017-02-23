defmodule ProjectsStatistics.ProjectsController do
  use ProjectsStatistics.Web, :controller

  alias ProjectsStatistics.ProjectRepo

  def create(conn, %{"name" => name, "description" => description}) do
    case ProjectRepo.create(name, description) do
      {:ok, project} ->
        conn
        |> put_status(:ok)
        |> render("show.json", project: project)
      {:error, project} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json")
    end
  end
end
