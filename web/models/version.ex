defmodule ProjectsStatistics.Version do
  use ProjectsStatistics.Web, :model

  alias ProjectsStatistics.{Project, Data}

  @fields [
    :project_id,
    :name
  ]

  @derive { Poison.Encoder, only: [:id | @fields] }

  schema "versions" do
    field :name, :string

    belongs_to :project, Project
    has_many :data, Data

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@fields)
  end
end
