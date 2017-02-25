defmodule ProjectsStatistics.Schema do
  use Absinthe.Schema

  alias ProjectsStatistics.{ProjectResolver, VersionResolver}

  import_types ProjectsStatistics.Schema.Types

  query do
    field :project, type: :project do
      arg :id, non_null(:id)

      resolve &ProjectResolver.find/2
    end

    field :projects, list_of(:project) do
      resolve &ProjectResolver.all/2
    end

    field :version, type: :version do
      arg :id, non_null(:id)

      resolve &VersionResolver.find/2
    end
  end

  mutation do
    field :create_project, type: :create_project_response do
      arg :name, non_null(:string)
      arg :description, :string

      resolve &ProjectResolver.create/2
    end

    field :create_version, type: :create_version_response do
      arg :name, non_null(:string)
      arg :project_id, non_null(:integer)

      resolve &VersionResolver.create/2
    end
  end
end
