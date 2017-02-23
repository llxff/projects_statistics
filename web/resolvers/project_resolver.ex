defmodule ProjectsStatistics.ProjectResolver do
  alias ProjectsStatistics.{Repo, Project}

  def all(_args, _info) do
    {:ok, Repo.all(Project)}
  end

  def find(%{id: id}, _info) do
    case Repo.get(Project, id) do
      nil     -> {:error, "Project id #{id} not found"}
      version -> {:ok, version}
    end
  end
end
