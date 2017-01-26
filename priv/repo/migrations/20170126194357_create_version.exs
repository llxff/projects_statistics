defmodule ProjectsStatistics.Repo.Migrations.CreateVersion do
  use Ecto.Migration

  def change do
    create table(:versions) do
      add :name, :string
      add :project_id, references(:projects, on_delete: :nothing)

      timestamps()
    end
    create index(:versions, [:project_id])

  end
end
