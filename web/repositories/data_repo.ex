defmodule ProjectsStatistics.DataRepo do
  import Ecto.Query

  alias ProjectsStatistics.Repo
  alias ProjectsStatistics.Data

  def of_version(version_id) do
    Data
    |> where(version_id: ^version_id)
    |> Repo.all
  end
end
