defmodule ProjectsStatistics.VersionRepo do
  import Ecto.Query

  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Version

  def create(project_id, name) do
    %Version{}
    |> Version.changeset(%{project_id: project_id, name: name})
    |> Repo.insert
  end
end
