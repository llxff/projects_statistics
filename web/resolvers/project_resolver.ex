defmodule ProjectsStatistics.ProjectResolver do
  alias ProjectsStatistics.{ProjectRepo, ChangesetErrors}

  def all(_args, _info) do
    ProjectRepo.all()
  end

  def find(%{id: id}, _info) do
    case ProjectRepo.find(id) do
      nil     -> {:error, "Project id #{id} not found"}
      project -> {:ok, project}
    end
  end

  def create(args, _info) do
    case ProjectRepo.create(args) do
      {:ok, project} ->
        {:ok, %{ project: project }}
      {:error, changeset} ->
        {:ok, %{ errors: ChangesetErrors.to_map(changeset.errors) }}
    end
  end
end
