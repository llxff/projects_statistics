defmodule ProjectsStatistics.ProjectRepo do
  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Project

  def create(name, description) do
    %Project{}
    |> Project.changeset(%{name: name, description: description})
    |> Repo.insert
  end
end
