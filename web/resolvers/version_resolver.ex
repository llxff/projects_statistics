defmodule ProjectsStatistics.VersionResolver do
  alias ProjectsStatistics.{VersionRepo, ChangesetErrors}

  def find(%{id: id}, _info) do
    case VersionRepo.find(id) do
      nil     -> {:error, "Version id #{id} not found"}
      version -> {:ok, version}
    end
  end

  def create(args, _info) do
    case VersionRepo.create(args) do
      {:ok, version} ->
        {:ok, %{ version: version }}
      {:error, changeset} ->
        {:ok, %{ errors: ChangesetErrors.to_map(changeset.errors) }}
    end
  end
end
