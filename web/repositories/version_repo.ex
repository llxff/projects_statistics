defmodule ProjectsStatistics.VersionRepo do
  import Ecto.Query

  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Version

  def of_project(project_id) do
    Version
    |> where(project_id: ^project_id)
    |> Repo.all
  end
end
