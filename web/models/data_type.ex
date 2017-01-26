defmodule ProjectsStatistics.DataType do
  use ProjectsStatistics.Web, :model

  @fields [
    :name
  ]

  @derive { Poison.Encoder, only: [:id | @fields] }

  schema "data_types" do
    field :name, :string
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required([:name])
  end
end
