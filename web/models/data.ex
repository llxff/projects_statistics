defmodule ProjectsStatistics.Data do
  use ProjectsStatistics.Web, :model

  @fields [
    :name,
    :version_id,
    :data_type_id
  ]

  @derive { Poison.Encoder, only: [:id | @fields] }

  schema "data" do
    field :name, :string
    belongs_to :version, ProjectsStatistics.Version
    belongs_to :data_type, ProjectsStatistics.DataType

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@fields)
  end
end
