defmodule ProjectsStatistics.VersionResolver do
  alias ProjectsStatistics.{Repo, Version}

  def find(%{id: id}, _info) do
    case Repo.get(Version, id) do
      nil     -> {:error, "Version id #{id} not found"}
      version -> {:ok, version}
    end
  end
end
