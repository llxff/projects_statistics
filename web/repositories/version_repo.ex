defmodule ProjectsStatistics.VersionRepo do
  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Version

  def find(id) do
    Repo.get(Version, id)
  end

  def create(attributes) do
    %Version{}
    |> Version.changeset(attributes)
    |> Repo.insert
  end
end
