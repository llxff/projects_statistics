defmodule ProjectsStatistics.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: ProjectsStatistics.Repo

  object :project do
    field :id,          :id
    field :name,        :string
    field :description, :string
    field :versions,    list_of(:version), resolve: assoc(:versions)
  end

  object :version do
    field :id,      :id
    field :name,    :string
    field :project, :project
  end

  object :data do
    field :id,      :id
    field :name,    :string
    field :version, :version
  end
end
