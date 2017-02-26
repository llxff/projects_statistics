defmodule ProjectsStatistics.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: ProjectsStatistics.Repo

  object :project do
    field :id,          :id
    field :name,        :string
    field :description, :string
    field :versions,    list_of(:version), resolve: assoc(:versions)
  end

  object :project_errors do
    field :name,        :string
    field :description, :string
  end

  object :create_project_response do
    field :project, :project
    field :errors,  :project_errors
  end

  object :version do
    field :id,         :id
    field :name,       :string
    field :project_id, :integer
    field :project,    :project
    field :data,       list_of(:data), resolve: assoc(:data)
  end

  object :version_errors do
    field :name,       :string
    field :project_id, :string
  end

  object :create_version_response do
    field :version, :version
    field :errors,  :version_errors
  end

  object :data_type do
    field :id,   :id
    field :name, :string
  end

  object :data do
    field :id,         :id
    field :name,       :string
    field :version_id, :integer
    field :data_type,  :data_type
  end
end
