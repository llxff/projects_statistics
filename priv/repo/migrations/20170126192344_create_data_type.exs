defmodule ProjectsStatistics.Repo.Migrations.CreateDataType do
  use Ecto.Migration

  def change do
    create table(:data_types) do
      add :name, :string
    end
  end
end
