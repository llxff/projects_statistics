defmodule ProjectsStatistics.Project do
  use ProjectsStatistics.Web, :model

  @fields [
    :name,
    :description
  ]

  @derive { Poison.Encoder, only: [:id | @fields] }

  schema "projects" do
    field :name, :string
    field :description, :string
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required([:name])
  end
end
