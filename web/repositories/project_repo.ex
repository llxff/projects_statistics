defmodule ProjectsStatistics.ProjectRepo do
  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Project

  def all do
    {:ok, Repo.all(Project)}
  end

  def find(id) do
    Repo.get(Project, id)
  end

  def create(attributes) do
    %Project{}
    |> Project.changeset(attributes)
    |> Repo.insert
  end
end
