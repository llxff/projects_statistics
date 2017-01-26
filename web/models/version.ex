defmodule ProjectsStatistics.Version do
  use ProjectsStatistics.Web, :model

  alias ProjectsStatistics.Project

  @fields [
    :project_id,
    :name
  ]

  @derive { Poison.Encoder, only: @fields }

  schema "versions" do
    field :name, :string
    belongs_to :project, Project
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@fields)
  end
end
