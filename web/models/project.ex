defmodule ProjectsStatistics.Project do
  use ProjectsStatistics.Web, :model

  alias ProjectsStatistics.Version

  @fields [
    :name,
    :description
  ]

  @derive { Poison.Encoder, only: [:id | @fields] }

  schema "projects" do
    field :name, :string
    field :description, :string

    has_many :versions, Version
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required([:name])
  end
end
