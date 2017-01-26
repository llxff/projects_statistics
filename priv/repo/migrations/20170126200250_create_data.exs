defmodule ProjectsStatistics.Repo.Migrations.CreateData do
  use Ecto.Migration

  def change do
    create table(:data) do
      add :name, :string
      add :version_id, references(:versions, on_delete: :nothing)
      add :data_type_id, references(:data_types, on_delete: :nothing)

      timestamps()
    end

    create index(:data, [:version_id])
    create index(:data, [:data_type_id])
  end
end
