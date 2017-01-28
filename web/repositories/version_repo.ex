defmodule ProjectsStatistics.VersionRepo do
  import Ecto.Query

  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Version

  def of_project(project_id) do
    Version
    |> where(project_id: ^project_id)
    |> Repo.all
  end

  def create(project_id, name) do
    %Version{}
    |> Version.changeset(%{project_id: project_id, name: name})
    |> Repo.insert
  end
end
