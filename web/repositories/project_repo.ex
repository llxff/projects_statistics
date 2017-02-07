defmodule ProjectsStatistics.ProjectRepo do
  import Ecto.Query

  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Project

  def all do
    Repo.all(Project)
  end

  def create(name, description) do
    %Project{}
    |> Project.changeset(%{name: name, description: description})
    |> Repo.insert
  end
end
